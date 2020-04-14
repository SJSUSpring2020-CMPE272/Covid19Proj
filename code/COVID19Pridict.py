import requests

# Paste your Watson Machine Learning service apikey here
# Use the rest of the code sample as written
apikey = "QVrODgZjynDOQk2l725gTGuHD9kI4dq22ayypoVLyLcM"

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
ml_instance_id = "1c9b19f1-1840-482d-8de3-6dd578d91041"
array_of_values_to_be_scored = [20200325,'AK', 1649,0,1,1,1691,'2020-03-25T20:00:00Z',1691,1,1,663,6,669]
another_array_of_values_to_be_scored = array_of_values_to_be_scored

import urllib3, requests, json

# NOTE: generate iam_token and retrieve ml_instance_id based on provided documentation	
header = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + iam_token, 'ML-Instance-ID': ml_instance_id}

# NOTE: manually define and pass the array(s) of values to be scored in the next line
payload_scoring = {"input_data": [{"fields": ["date", "state", "negative", "pending", "hospitalized", "death", "total", "dateChecked", "totalTestResults", "deathIncrease", "hospitalizedIncrease", "negativeIncrease", "positiveIncrease", "totalTestResultsIncrease"], "values": [array_of_values_to_be_scored, another_array_of_values_to_be_scored]}]}

response_scoring = requests.post('https://us-south.ml.cloud.ibm.com/v4/deployments/460c7852-504f-46f9-9f65-de75a8518ad7/predictions', json=payload_scoring, headers=header)
print("Scoring response")
print(json.loads(response_scoring.text))

# import urllib3, requests, json

# # Paste your Watson Machine Learning service apikey here
# # Use the rest of the code sample as written
# apikey = "123456789"

# # Get an IAM token from IBM Cloud
# url     = "https://iam.bluemix.net/oidc/token"
# headers = { "Content-Type" : "application/x-www-form-urlencoded" }
# data    = "apikey=" + apikey + "&grant_type=urn:ibm:params:oauth:grant-type:apikey"
# IBM_cloud_IAM_uid = "bx"
# IBM_cloud_IAM_pwd = "bx"
# response  = requests.post( url, headers=headers, data=data, auth=( IBM_cloud_IAM_uid, IBM_cloud_IAM_pwd ) )
# iam_token = response.json()["access_token"]

# # NOTE: generate iam_token and retrieve ml_instance_id based on provided documentation	
# header = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + iam_token, 'ML-Instance-ID': ml_instance_id}

# # NOTE: manually define and pass the array(s) of values to be scored in the next line
# payload_scoring = {"input_data": [{"fields": ["date", "state", "negative", "pending", "hospitalized", "death", "total", "dateChecked", "totalTestResults", "deathIncrease", "hospitalizedIncrease", "negativeIncrease", "positiveIncrease", "totalTestResultsIncrease"], "values": [array_of_values_to_be_scored, another_array_of_values_to_be_scored]}]}

# response_scoring = requests.post('https://us-south.ml.cloud.ibm.com/v4/deployments/460c7852-504f-46f9-9f65-de75a8518ad7/predictions', json=payload_scoring, headers=header)
# print("Scoring response")
# print(json.loads(response_scoring.text))