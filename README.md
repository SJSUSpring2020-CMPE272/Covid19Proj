# COVID-19 Forecasting
## Web Site:
https://yuanwanmydemo.mybluemix.net/

## Abstract
-	In response to the COVID-19 pandemic, people from all kinds of science domain and industry domain work gother and try their best to figure out the problem faced by all over the world. Global research has been taken to apply recent advances in machine learning techniques to generate new insights in support of the ongoing fight against this infectious disease.Even as young software engineering graduates in SJSU, we are trying to do our best in this challenging time. 

## Requirement
-	 We want to build a ML model to predict the trend of the disease, which help to research on the future study of infectious deseases. And also, if accurate, this model can help people to prepare for COVID19, such as how long they will stay at home in different areas, how many people can be infectious in the future, which are can be dangerous and which are not. 
-	We will estanlish a web site to offer the prediction of everywhere we can find enough data. People can select the area which they pay attention to and select the date they care about. For example, as the picture bellow:
![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics/predict.jpg)
-	This is a screenshot from the front of our project. The user can select the date in the future and it will demonstrate the prediction of the future development of COVID19.
-	As for prediction part,user can easily choose the future date,the level of quarantine to predict data

-   Also, we provide the current situation of COVID19  
![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics/map.jpg)

## Project Statement

## User Case Scenario

## Architecture
 can get the newest information from our application.
![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics/architecture.png)
-	Data Set: We collect data from kaggle and github. The data source link is at the end of this file.
-	Front End:react.js,boostrap,;diagram will be simpler and more intuitive to show data relation, as for chart showing,we choose echart.js to show our data.
-	Back End:python,node.js,IBM cloud;we will collect plenty of data associated with COVID-19,then choose most suitable model, train our data in IBM Watson machine learning,then provide a API for predicting data.
-  we fetch the latest daily data about covid-19 in every state and the nearest one month in USA from Intnet,then update them in our front page,so users
-  
## Tech Tools
IBM Cloud Machine Learning  
IBM Cloud Data Storage
React 
Vue
NodeJS
Python

## Data Source
- [https://www.politico.com/interactives/2020/coronavirus-testing-by-state-chart-of-new-cases/](https://www.politico.com/interactives/2020/coronavirus-testing-by-state-chart-of-new-cases/)  
- https://www.kaggle.com/sudalairajkumar/covid19-in-usa  
- https://covid-19.direct/county/CA/Santa%20Clara  
- Air quality historical data: https://aqicn.org/data-platform/register/

   
