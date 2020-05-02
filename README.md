
## Is Wearing Mask Helpful For Us to Prevent From Getting the Covid-19 Virus? 
## Does Quarantine Work for Control/Reduce the Covid-19 Positive Increase Number for A Country?

I have saw a joke on a video game reddit that there are two players argue for their countries. The background is that the U.S just exceed China and become the first country which have the most number of Covid-19 case. 
Player A: I am so proud to be the citizen of our country! 
Player B: XXXX XXXX(Some dirty word) Chinese. 
Player A: Dude, I am an American… 
Player B: …  

As we all know that China is the country which implemented quarantine rule and promoted every citizen to wear mask. China was the country which had the most Covid-19 case, however, right now China had already controlled the spreading of Covid-19 and restart people’s work and resume cities’ daily operation.  
![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics_bon/COVIDNations.jpg)  
So, here are two questions: is wearing mask helpful for us to prevent from getting the Covid-19 Virus? And does quarantine work for control or reduce the Covid-19 positive increase case for a country?  
##
I track back some news about quarantine rule and government recommended citizens to wear mask as necessary.  
![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics_bon/15days.png)  
![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics_bon/ImportantUpdates.png)  
![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics_bon/searchdate.png)  
We could assume that the quarantine start date is around Mar 17th, and the promoting face masks date is April 3rd.  Then we will see whether data got affected after these two dates. 
##
First of all, we will calculate the positive increase ratio per day. For example, Day 1, the increase number is 100, Day 2 is 50. Then the increase ratio should be -50%. etc…
![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics_bon/positiveIncrease.png)  

From the data, we knew that the covid-19 explode date for the US nation should be on Feb.28th. Before Feb.28th, the number of Covid-19 case still a few. And we can jump until Feb 28th.  

![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics_bon/feb28.png) 


Because the increase ratio is not static, it will influence by each day’s increase number. It would be better for us to count the average to get a period’s increase rate. Then we can compare the data between the period before quarantine and after the quarantine. And the period before promoting mask VS after promoting mask.  

And we can view that, after the government implements quarantine rule, the increase positive ratio got obvious decrease. From 40-50% down to 10-20%, we can view that the covid-19 positive case increase speed get slow down. 
More importantly, after April 3rd, the covid-19 positive case increase ration from 10-20% down to below 5%. It is very convincing that quarantine rule/promoting mask have positive effect for a country to fight with Covid-19.  

# However
The decrease of the covid-19 positive case increase speed does not mean the US nation already pass the turning point. Actually, the US nation still have not passed the turning point, though some state already passed the turning point. 

I have implement a turning point algorithm. Let Just take Italy as the example.
![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics_bon/Italytp.png)  

Because the new increase case get influenced every, we can count the average increase number first. We can set the ratio as 3-day a period and 5-day a period. 3-day period could get more in precise date for turning point. However, if the data fluctuate in very huge range, we would recommend to use large scale range. 
#
#
![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics_bon/tp.png)  
From the turning point algorithm, we can know that, the turning point will be appear around the 30-32 row of dataframe. 

![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics_bon/USAtp.png)  


Which between 3-25 to 3-27.  
![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics_bon/linechart.png)  
and we do find it the increase number vector get decrease after the turning point. 

IF we implement this into the US dataset:
![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics_bon/USDatasheet.png)  
  

![Image text](https://github.com/SJSUSpring2020-CMPE272/Covid19Proj/blob/master/pics_bon/USntp.png)  
And we will find it the turning point for the US nation not come yet. But at the period from April 6 to April 10 will have the most increase case per day. After that, later date’s increase case per day is decreasing with very low rate.  

Why quarantine rule and wearing mask work, why we still have lot of increase case per day? 
Previous work, such as quarantine rule and wearing mask, we just control the increase rate for increase covid-19. If we not implements those work, right now, we may have not rather 30000 additional number per day, but 50000, 60000 additional number per day.  

Why we still don’t have turning point yet?  
Although for some state that already have turning point, the U.S is a very big country, that Covid-19 condition is different from states to states. Until all the states from U.S pass the turning point, then the whole nation will pass the turning point then.  


In conclusion, we just control the increase from additional case, there is still a distance for us to ultimately beat the virus.  






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

   
