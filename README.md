# Spectrum-Of-Light
https://spectrum-of-light.vercel.app/

## 💡 Inspiration

Autism Spectrum Disorder is a neurodevelopmental disorder which causes a wide range of impairments in social communication and restricted and repetitive behaviors. Approximately **1%** of the world's population (**10 Lakh cases in India per year**) is diagnosed with Autism and 40% of the people on the spectrum never speak. Due to no biological marker and **no proper medical diagnosis of Autism** out there there is no medical tool/test like an MRI scan,CT scan, Blood tests etc which can help detect Autism. No technological innovation or software is out there to simplify or ease Autism diagnosis. 
Autism diagnosis is done via behavioral assessments like **M-CHAT (20 question assessment)**, **PEDS ( a parent interview having questions regarding behavioral observations of a child)** etc. Research studies recently have found certain similarities in facial features of children on the autism spectrum like an unusually broad upper face,including wide-set eyes as well as a shorter middle region of the face, including the cheeks and nose. Inspired by the will to come up with a feasible solution, Spectrum Of Light was built using ML and facial recognition technologies to help detect the probability of autism in children.

## 💻 What it does

Spectrum of Light takes in a child’s image as an input from your local storage, parses it through the ML model trained to detect whether a child is autistic or not and returns the probability of Autism. The model is trained using a dataset of approx 2500 images of autistic as well as non autistic children using Teachable Machine and via studying the facial features gives the probability of the child being on the spectrum.

## ⚙️ How I built it

* React.js Framework
* ML Model : Teachable Machine
* Dataset : Kaggle

## 📚 Research

The research phase mainly involved studying about autism and it’s current diagnosis procedures based on behavioral analysis and going through the ongoing research on using the similarity in facial features of autistic kids as a key component in diagnosing autism and how computer vision can act as a screening tool to ease the process of diagnosis. 

## 🧠 Challenges I ran into

The whole journey from research phase to building the prototype was indeed a challenging journey and was an amalgamation of learning things, implementing them and then backtracking to find a better solution to make things work out. 
* Due to lack of biological markers on Autism diagnosis and ongoing research on facial analysis on Autistic kids, there was limitation of resources and a lack of well developed dataset to help in the refining of the ML model. 
* Working with frameworks like react for the first time was challenging
* Difficulty in connecting client side front end (react) with the ML model to add functionality to prototype. 

## 📖 What I learned

The whole span of project development was a huge learning experience for me. From researching ML models to help with my problem statement and researching Autism diagnosis , I realized the power of technology and how it can help improve and ease the lives of people on the spectrum even outside of autism diagnosis. It was my first time working with different frameworks and tackling a problem statement through ML. I got to work with react, tried implementing express which didn’t go as per plan but at the end I learned about client side ML and how it helped me in tackling my problem. I also learned about react components, teachable machines, tensorflow and json as well. Getting to see the power of ML and how it can help in solving real life problems is indeed an eye opening experience.

## 🚀 What's next for Spectrum Of Light

Developing the prototype with additional features to increase the accuracy of autism detection is the next goal. Lack of eye contact and repetitive behaviors are prominent symptoms of people who are on the spectrum. Tweaking the facial recognition feature such as to keep track of the eye contacts and repetitive behaviors and their frequency in real time is the next milestone. 
