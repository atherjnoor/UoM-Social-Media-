import os
from mistralai import Mistral
from mistralai.models.chat_completion import ChatMessage

class CourseBuddyConnector:
    def __init__(self):
        self.client = Mistral(api_key=os.environ.get("MISTRAL_API_KEY"))
        self.model = "mistral-large-latest"

    def find_matches(self, student_info):
        prompt = self._generate_prompt(student_info)
        messages = [ChatMessage(role="user", content=prompt)]

        try:
            response = self.client.chat.complete(model=self.model, messages=messages)
            return self._parse_response(response.choices[0].message.content)
        except Exception as e:
            print(f"Error in API call: {e}")
            return []

    def _generate_prompt(self, student_info):
        return f"""
        Given the following student information:
        Name: {student_info['name']}
        Courses: {', '.join(student_info['courses'])}
        Interests: {', '.join(student_info['interests'])}

     provide:
        1. Name
        2. Shared courses
        3. Shared interests
        4. A brief explanation for why they're a good match

       a JSON array of objects.
        """

    def _parse_response(self, response_content):
        # In a real-world scenario, you'd parse the JSON here
        # For now, we'll just return the raw content
        return response_content

# Create an instance of CourseBuddyConnector
connector = CourseBuddyConnector()

# Example student information
sample_student = {
    "name": "Alice Johnson",
    "courses": ["Computer Science 101", "Data Structures", "Artificial Intelligence"],
    "interests": ["Machine Learning", "Web Development", "Robotics"]
}

# Find study buddies
matches = connector.find_matches(sample_student)
print(matches)


