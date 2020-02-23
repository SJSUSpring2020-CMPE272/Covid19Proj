ProjectGroup-6
===============
# Project Idea1:
## 1. Project Title:
shopping bot(snkrs/supreme)
## 2. Project idea description:
Create a bot that help people acclerate the speed of buying hype sneaker or clothes. For supreme website, it will have a system that detects bot. We need to personify bot's movement, meanwhile minimize the time of adding to cart and check out. 
## 3. Goal of the project (who are you developing the project for)
Benefit for shoe&clothes reseller. Moreover, a successful bot also have a great market. We also can make money at the process of resell bots.
## 4. Technology stack:
HTML, Javascript, Internet Technology, CSS, any coding language for back-end (PYTHON, java)

# Project Idea2:
## 1. Project Title:
Dating in Bay
## 2. Project idea description:
Create a dating app that gather client's information and favor. The basic information include height, weight, character, hobby, constellation, and photo. The client's favor means the characters or the features that he/she looking for or attract him/her. The job of app is to matching clients' infomation and favors. If the result got match, they can chat together and view others' photo. After a period, we can gather a amount of successful match and failure match, then after analyze those result, we will add more features on the information and favors to rise up the successful rate of match. 
## 3. Goal of the project (who are you developing the project for)
Benefit for the coders who are still waiting for their Mr./Mrs. Right
## 4. Technology stack:
DB: mongo DB, aws  Front end: JavaFX  Backend: Java

# Project Idea3:
## 1.  Project Title:
President Predict
## 2.  Project idea description:
Gather and analyze tweet data about topic of president vote, predict the percentage rate of candidate of next US president. In my undergraduate data science course, I have done a similar project like this. That project is to analyze Trump's twitter. We used python package like sentiment analysis to analyze the sentiment influence of Trump's tweet. For this project, we can analyze the news or tweets to recognize currently which president is the most welcome, and can receive residents' trust. We also will add more features and try to make this model more close to the reality. 
## 3. Goal of the project (who are you developing the project for)
For the parties and the citizen
## 4. Technology stack:
Python, twitter API, tweepy , web crawler technology, PHP

# Project Idea-4:  
## 1、Project Title:  
Streetlamp Energy-Saving System  
## 2、Project idea description:  
 This is a business project in which I participated developed by Chongqing Green Technology co., LTD in China from 2015-2018. In the project, the system collects environmental data, such as illumination, temperature humidity and PM2.5, uploads them to the server. After comprehensive calculation and overall processing, the brightness and color temperature of the street lights can be automatically adjusted (also can be monitored and maintained through the app), making road lighting more energy efficient and driving safety.  
 
In this project, we use expert system to calculate the brightness and color temperature that satisfies the road environment well. Then I tried to learn about SVM(Support Vector Machine), which is a classic method in machine learning, and apply it on the system. I also wrote a paper as my graduation prerequisite to get the master’s degree in China. It’s as bellow:  

Wen Junhao, Wan Yuan, Zeng Jun, Wang Xibin, Liang Guanzhong. Application of illumination clustering and SVM in energy-saving control strategy of street lamps[J]. Computer Science, 2019(7).  

But in the half way I left the company and the research stopped. If conditions allow, I want to continue my research on the Streetlamp Energy-Saving System with SVM or other machine learning algorithms.  

## 3、Goal of the project (who are you developing the project for)  
The project is to realize energy-saving on streetlamps. Usually the power of LED streetlight is 150W and 120W on the road and 60W in the tunnel. Urban road lighting consumes about 30% of China's total lighting power consumption. And If we can adjust the power of streetlamps according to traffic, we can save much energy. Also we can adjust the color temperature between white and yellow, which can help drivers to see the road more clearly in different weather.  

## 4、Technology stack:  
Server: JAVA with Springboot + Mybatis + Mysql as the core framework. Algorithm may be SVM developed by ourselves or public framework like TensorFlow. We need more time to confirm it.  
App: JAVA, Android Development Kit.  
Terminal(already developed on the street light): C, uCOSIII  
Additionally, if we want to do work on this project, I must get contact with the company first to ask for permit and devices.   
  
# Project Idea-5:   
## 1、Project Title:  
Smart Home Control System  
## 2、Project idea description:  
When I was an undergraduate, I created a startup and developed the system of smart home. Suppose that there was a virtual steward, who controlled lighting, curtains, TV, air conditioning, and monitoring, etc.   

On the half way, we found smart home systems were not smart at all because traditional smart home companies, like Honeywell Siemens, were only good at embedded system. They didn’t know what AI was, which must be the key in smart home system. We tried to figure it out, but we failed for we didn’t know machine learning, too.  

Now, AI algorithms for business project are more mature and I’m in Silicon Valley. So I want to try again with the help of Professor Ranjan, to make something that is really smart.  

## 3、Goal of the project (who are you developing the project for)  
The main goal for smart home I think should be convenience, comfort and security for people. As an AI system, it should know what the master wants and prepare for him/her. For example, If the master comes to home, it should recognize the identity of the people and open the door and lights for the master if passed. When the master gets to the sofa, TV should be opened and favorite program should be selected. When the master wants to have a sleep in sofa, the system should turn down the light and TV.  

## 4、Technology stack:  
Server: JAVA with Springboot + Mybatis + Mysql as the core framework. Algorithm framework will be TensorFlow.   
App: JAVA, Android Development Kit.  
Terminal(already developed): C, Zigbee.  
  
# Project Idea-6:   
## 1、Project Title:  
Seeking Neighbors Strategy for Live Stream Transmission on P2P Network  
## 2、Project idea description:  
This project is difficult for us and it’s just a discussion. From 2018 to 2019, I was working on a live stream platform offering over than 200 English and Spanish TV channels, which was developed by a company in Shenzhen, China and its main market was South America.   

Because the number of online users increases dramatically, our old system couldn’t withstand a huge amount of stream data transmission, under which situation there would be a huge cost for servers and bandwith. I was assigned to join a group to develop a P2P stream transmission engine to replace the original engine, which push all the data for every TV terminal. Even traditional P2P technology is very mature, we still to make our P2P stream engine more efficient than others. First, we created a multi-way tree in the tracker server, which would calculate and assign nearest 30 nodes for each peer. Then the peer tried to make hole on the Internet and connect with neighbors by UDP.   

The first layer of the multi-way tree is the root node; the second layer is the operator node; the third layer is the public network address; the fourth layer is the NAT1 address; the fifth layer is the NAT2 address; the sixth layer is the UPNP address; the seventh The layer is the local address; the eighth layer is the node information (that is, the leaf nodes of the tree, the storage node quality information, resource information, etc.). Each layer performs insert sorting based on IP (converted to INT integer) when constructing and inserting nodes. At the same time, a hash map <node ID, node information> is established for all nodes. When a node PeerA requests its neighbors from the tracker, the node information is obtained through the node ID, and then the node information is used to traverse the leaf node position of the seven-layer multi-tree in reverse order, searching for its siblings, and checking whether there are matching resources. , If there is, then add it to the node list; if not, search for its cousin node by the parent node. Until the threshold number is searched (30).  

But the previous searching-nodes method only used the two dimensions of the public network IP logical distance and the degree of resource matching are used to search for neighboring nodes, and the node quality is not reliable. I think it we can apply RS(Recommender System) on the system with attributes as bellow  
* Public network IP logical distance.  
* Telecom operator type.  
* The time of day.  
* Weekly time of day.  
* Resource ID.  
* The maximum number of load nodes ever uploaded.  
* Network Type.  
* Transmission ability of shared resources.  
 The RS can be used to establish the list of recommendation neighbors. The similarity between nodes is calculated at 1-5 items, and the larger the 6-8 items, the better.  
## 3、Goal of the project (who are you developing the project for)  
The goal of the RS method is to help the tracker assign better quality nodes to every peer, which can not only reduce the cost of servers and bandwith, but also provide more stable live stream data for customers.  
## 4、Technology stack:  
Server: JAVA with Springboot + Mybatis + Mysql as the core framework. Algorithm framework will be TensorFlow.   
App: JAVA, Android Development Kit.  


# Project Idea7:
## 1.Project Title : 
Job Hunting
## 2.Project idea description : 
Provide the platform for students and companies to conveniently find job and employees,companies can post jobs on the platform and students can apply them,the top jobs shown on students’ page are selected by the students’ basic information and preference based on their regular browsing and the jobs applied.
## 3.Goal of the project (who are you developing the project for) : 
Companies and students.
## 4.Technology stack
Front-end:react.js html css node.js. back-end:java mysql TensorFlow

# Project Idea8:
## 1.project title : 
mental illness killer
## 2.idea description : 
Nowadays,mental illness especially depression become really serious.I believe the number of psychological patients will be reduced by using mental illness killer,the system will detect people’s emotion by capturing their facial expression,by training plenty of data,system will accurately recognize patients’ mental problem,like depression,sadness,anxiety etc.Finally,the system will give advice about the top hospitals,the most useful drugs,recommendations from other cured patients with similar problem.
## 3.Goal of the project : 
People with light or serious mental problem
## 4.Technology stack : 
Front-end:react.js html css jsx redux. back-end:python mongoDB,TensorFlow.

# Project Idea9:
## 1.project title : 
Intelligent parking
## 2.Idea description : 
Parking is a big issue nowadays due to the increasing number of cars,traditional way of parking which is operated by human waste time and energy.Intelligent parking system can detect the plate of the car,pay the parking fee and exit the parking lot.
## 3.Goal of the project : 
Car owners and the parking lot managers.
## 4.Technology stack : 
Front-end:react.js html css jsx redux. back-end:python mongoDB,TensorFlow.

# Project Idea 10:
## 1.Project title: 
Auto Insurance Selection Helper
## 2.Idea description: 
There are a ton of auto insurance companies in the market. And each company offers various kinds of plans and policies. Costumers also cares how the plan they chosen actullay work. Using AI to consider budget, bill period, service reaction speed, plan content and so on. This application will recommend an auto insurance plan.
## 3.Goal of the project: 
People who need buy an auto insurance.
## 4.Technology stack: 
mircoservice, python, AI framework like TensorFlow and Database

# Project Idea 11:
## 1.Project title: 
Identify Music Style and Creat Music by Style
## 2.Idea description: 
There are so many kinds of music among the world. It's a huge for human to sort them. If we use artificial intelligence to do it, it will be a big help. After learned how to identify music, it even could help us to create the specific music.
## 3.Goal of the project: 
Music fan and musician
## 4.Technology stack: : 
python, deep learning framework.

# Project Idea 12:
## 1.Project title: 
Smart Supply Chain System
## 2.Idea description: 
The smart supply chain system mamanges whole supply chain from Factories or farms to merchants. It monitors and collects the data from factories, carriers, and merchant to predict and control the operation of supply chain. It's a large scale system based on cloud.
## 3.Goal of the project: 
Owner of factories, farm, carrier and merchants.
## 4.Technology stack: 
cloud computing, AI framework, angularJS, database systems.

   
