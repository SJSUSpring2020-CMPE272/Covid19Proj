import requests

# Paste your Watson Machine Learning service apikey here
# Use the rest of the code sample as written
apikey = "ak771J-5kx03A4zH-0zjUK60g-BbkKD5HU7o3HzIvF1r"

# Get an IAM token from IBM Cloud
url     = "https://iam.bluemix.net/oidc/token"
headers = { "Content-Type" : "application/x-www-form-urlencoded" }
data    = "apikey=" + apikey + "&grant_type=urn:ibm:params:oauth:grant-type:apikey"
IBM_cloud_IAM_uid = "bx"
IBM_cloud_IAM_pwd = "bx"
response  = requests.post( url, headers=headers, data=data, auth=( IBM_cloud_IAM_uid, IBM_cloud_IAM_pwd ) )
res = response.json()
print(res)
iam_token = res["access_token"]

#user create 
ml_instance_id = "ed418535-f5e3-4015-8ad6-7927873e01f0"
array_of_values_to_be_scored = [20200425,'NY']
another_array_of_values_to_be_scored = array_of_values_to_be_scored

import urllib3, requests, json

# NOTE: generate iam_token and retrieve ml_instance_id based on provided documentation	
header = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + iam_token, 'ML-Instance-ID': ml_instance_id}


# NOTE: manually define and pass the array(s) of values to be scored in the next line
payload_scoring = {"input_data": [{"fields": ["date", "state"], "values": [array_of_values_to_be_scored, another_array_of_values_to_be_scored]}]}

response_scoring = requests.post('https://us-south.ml.cloud.ibm.com/v4/deployments/d7751b29-a351-4740-8359-6bb7140ac6ec/predictions', json=payload_scoring, headers=header)

print("Scoring response")
print(json.loads(response_scoring.text))
