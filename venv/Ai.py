import os
import json
from typing import Dict, List, Any
from mistralai.client import MistralClient  # Correct import
from mistralai.models.chat_completion import ChatMessage
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class CourseBuddyConnector:
    def __init__(self):
        api_key = os.environ.get("MISTRAL_API_KEY")
        if not api_key:
            raise ValueError("MISTRAL_API_KEY not found in .env file")
        
        self.client = MistralClient(api_key=api_key)  # Updated client initialization
        self.model = "open-mistral-7b"  # Updated model name

    def _generate_prompt(self, student_info: Dict[str, Any]) -> str:
        return f"""Generate 3 study buddies as JSON array. Format:
        {{
            "name": "string",
            "shared_courses": ["array"],
            "shared_interests": ["array"],
            "match_reason": "string"
        }}
        For {student_info['name']} in courses: {', '.join(student_info['courses']}
        With interests: {', '.join(student_info['interests'])}
        Output ONLY the JSON array without any commentary."""

    def find_matches(self, student_info: Dict[str, Any]) -> List[Dict[str, Any]]:
        try:
            response = self.client.chat(  # Correct API call
                model=self.model,
                messages=[ChatMessage(role="user", content=self._generate_prompt(student_info))]
            )
            raw = response.choices[0].message.content
            return json.loads(raw.strip("` \n"))
        except json.JSONDecodeError:
            print("JSON parsing failed. Raw response:", raw)
            return []
        except Exception as e:
            print(f"API Error: {str(e)}")
            return []

if __name__ == "__main__":
    try:
        connector = CourseBuddyConnector()
        matches = connector.find_matches({
            "name": "Alice Johnson",
            "courses": ["COMP 4190", "COMP 3350"],
            "interests": ["AI", "Robotics"]
        })
        print(json.dumps(matches, indent=2))
    except Exception as e:
        print(f"Startup Error: {str(e)}")