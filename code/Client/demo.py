
header = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + iam_token, 'ML-Instance-ID': ml_instance_id}


payload_scoring = {"input_data": [{"fields": ["date", "state"], "values": [array_of_values_to_be_scored, another_array_of_values_to_be_scored]}]}

response_scoring = requests.post('dest', json=payload_scoring, headers=header)
print("Scoring response")
print(json.loads(response_scoring.text))