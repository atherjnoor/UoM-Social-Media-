import os
from mistralai import Mistral
import json
from typing import Dict, List, Any
from dotenv import load_dotenv  # Add this for .env support

# Load environment variables from .env file
load_dotenv()

class CourseBuddyConnector:
    def __init__(self):
        api_key = os.environ.get("MISTRAL_API_KEY")
        if not api_key:
            raise ValueError("MISTRAL_API_KEY environment variable is not set")
        print(f"Using API Key: {api_key}")  # Optional: Remove or modify for production
        self.client = Mistral(api_key=api_key)
        self.model = "mistral-tiny"  # Changed to a simpler model

    def find_matches(self, student_info: Dict[str, Any]) -> List[Dict[str, Any]]:
        prompt = self._generate_prompt(student_info)
        messages = [{"role": "user", "content": prompt}]
        try:
            response = self.client.chat.complete(model=self.model, messages=messages)
            raw_response = response.choices[0].message.content
            print("Raw API Response:", raw_response)  # Debug output
            return self._parse_response(raw_response)
        except Exception as e:
            print(f"Error in API call: {e}")
            return []

    def _generate_prompt(self, student_info: Dict[str, Any]) -> str:
        return f"""
        Given the following student information:
        Name: {student_info['name']}
        Courses: {', '.join(student_info['courses'])}
        Interests: {', '.join(student_info['interests'])}

        Provide a JSON array of objects with 3 potential study buddies. Each object must include:
        1. "name": (string) Name of the study buddy
        2. "shared_courses": (array of strings) Shared courses
        3. "shared_interests": (array of strings) Shared interests
        4. "match_reason": (string) A brief explanation for why they're a good match

        Return the response as a valid JSON array **with no additional text outside the JSON**. Example format:
        [
          {{
            "name": "John Doe",
            "shared_courses": ["COMP 4190", "COMP 3350"],
            "shared_interests": ["Machine Learning"],
            "match_reason": "John shares two courses and has a common interest in Machine Learning."
          }},
          ...
        ]
        """

    def _parse_response(self, response_content: str) -> List[Dict[str, Any]]:
        try:
            start = response_content.find('[')
            end = response_content.rfind(']') + 1
            if start != -1 and end != -1:
                json_str = response_content[start:end]
                return json.loads(json_str)
            else:
                raise json.JSONDecodeError("No valid JSON array found", response_content, 0)
        except json.JSONDecodeError as e:
            print(f"Error: Unable to parse JSON response - {e}")
            print("Response content:", response_content)
            return []

# Create an instance of CourseBuddyConnector
connector = CourseBuddyConnector()

# Example student information
sample_student = {
    "name": "Alice Johnson",
    "courses": ["COMP 4190", "COMP 3350", "COMP 4180"],
    "interests": ["Machine Learning", "Web Development", "Robotics"]
}

# Find study buddies
matches = connector.find_matches(sample_student)
print(json.dumps(matches, indent=2))