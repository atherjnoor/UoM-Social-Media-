import os
from mistralai import Mistral
import json
from typing import Dict, List, Any

class CourseBuddyConnector:
    def __init__(self):
        # Set the API key directly in the script for testing purposes
        os.environ["MISTRAL_API_KEY"] = "YKJHHG2cEwJVeR5dj2dTo6ki8U6U1Dzz"
        api_key = os.environ.get("MISTRAL_API_KEY")
        if not api_key:
            raise ValueError("MISTRAL_API_KEY environment variable is not set")
        print(f"Using API Key: {api_key}")  # Print the API key for debugging
        self.client = Mistral(api_key=api_key)
        self.model = "mistral-medium"  # More widely available model

    def find_matches(self, student_info: Dict[str, Any]) -> List[Dict[str, Any]]:
        prompt = self._generate_prompt(student_info)
        messages = [{"role": "user", "content": prompt}]
        try:
            response = self.client.chat.complete(model=self.model, messages=messages)
            return self._parse_response(response.choices[0].message.content)
        except Exception as e:
            print(f"Error in API call: {e}")
            return []

    def _generate_prompt(self, student_info: Dict[str, Any]) -> str:
        return f"""
        Given the following student information:
        Name: {student_info['name']}
        Courses: {', '.join(student_info['courses'])}
        Interests: {', '.join(student_info['interests'])}

        Provide a JSON array of objects with 3 potential study buddies. Each object should include:
        1. "name": (string) Name of the study buddy
        2. "shared_courses": (array of strings) Shared courses
        3. "shared_interests": (array of strings) Shared interests
        4. "match_reason": (string) A brief explanation for why they're a good match

        Ensure the response is a valid JSON array. Example format:
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
            return json.loads(response_content)
        except json.JSONDecodeError:
            print("Error: Unable to parse JSON response")
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


