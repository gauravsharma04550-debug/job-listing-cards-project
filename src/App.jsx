import React from 'react'
import Card from './Components/Card'


const App = () => {
  const jobs = [
    {
    brandlogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsDJdEKuo_WLMTGOGSp6gvOJmtYc1PRrI8A&s",
    company: "Oracle",
    posted: "3 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Bangalore, India",
  },

    {
      brandlogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6XYPmct6dLPCSRzJZ1J-5XM5E-6DgZK9tw&s",
      company: "Salesforce",
      posted: "1 week ago",
      post: "Machine Learning Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Hyderabad, India",
    },
    {
    brandlogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "Google",
    posted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India",
  },

  {
    brandlogo:
      "https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg",
    company: "Amazon",
    posted: "5 days ago",
    post: "SDE Intern",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$25/hr",
    location: "Hyderabad, India",
  },

  {
    brandlogo:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    posted: "1 day ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Noida, India",
  },

  {
    brandlogo:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg",
    company: "Meta",
    posted: "4 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Mumbai, India",
  },

  {
    brandlogo:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    company: "Apple",
    posted: "6 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Pune, India",
  },

  {
    brandlogo:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    company: "Netflix",
    posted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Delhi, India",
  },

  {
    brandlogo:
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    company: "Tesla",
    posted: "7 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Chennai, India",
  },

  {
    brandlogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    company: "IBM",
    posted: "2 days ago",
    post: "Cloud Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$48/hr",
    location: "Gurgaon, India",
  },

  {
    brandlogo:
      "https://avatars.githubusercontent.com/u/476009?s=280&v=4",
    company: "Adobe",
    posted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Noida, India",
  },

  {
    brandlogo:
      "https://s3-symbol-logo.tradingview.com/intel--600.png",
    company: "Intel",
    posted: "10 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Entry Level",
    pay: "$30/hr",
    location: "Kolkata, India",
  },
];
console.log(jobs);

  return (
    <div className='parent'>
      {jobs.map(function(elem, Idx) {
      return <div key={Idx}>
        <Card company = {elem.company} 
      logo = {elem.brandlogo}
      posted ={elem.posted}
      post ={elem.post}
      tag1 ={elem.tag1}
      tag2 ={elem.tag2}
      pay ={elem.pay}
      location ={elem.location}
       />
      </div>;

  })}
  
    </div>
    
  )
}

export default App
