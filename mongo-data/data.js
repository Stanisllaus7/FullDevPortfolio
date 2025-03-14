use db1

db.createCollection('skills')
db.createCollection('projects')

db.skills.insertMany(
    [
        {
          naam: 'JavaScript',
          level: 7,
          category: 'IT',
          img: 'JS.png',
          dsc: "I'm working with JavaScript on all of my projects, so I have a huge experience. I have been using this programming language for 2 years."
        },
        {
          naam: 'HTML',
          level: 9,
          category: 'IT',
          img: 'HTML.png',
          dsc: 'HTML was my first programming language. There is no any project without HTML.'
        },
        {
          naam: 'CSS',
          level: 9,
          category: 'IT',
          img: 'CSS.png',
          dsc: "With CSS I can make design for every style possible. It's my second programming language."
        },
        {
          naam: 'Docker',
          level: 9,
          category: 'IT',
          img: 'docker.png',
          dsc: "I'm studying docker for almost 2 years. My docker skills are not less than others so I can work with it without any problems."
        },
        {
          naam: 'C#',
          level: 7,
          category: 'IT',
          img: 'C.png',
          dsc: "With C# I am working not so often compared to other programming languages but still I have one mini project on C# that you can see in page 'projects'."
        },
        {
          naam: 'C++',
          level: 4,
          category: 'IT',
          img: 'Cplus.png',
          dsc: 'I also know a bit of C++. I was studying it for around 2 mounth. I do not have any projects on C++ yet but I will change it soon.'
        }
      ]
)

db.projects.insertMany(
    [
        {
          naam: 'Quiz-App',
          dsc: 'Quiz game on JavaScript. You have a qusetion and you can choose one of 3 answers. Right answer gives you 1 point. In the end you see your score.',
          type: 'Frontend Project',
          img: 'quiz.png'
        },
        {
          naam: 'Portfolio',
          dsc: 'I have been working on this project for 2 years. This porject is my portfolio with information about me. Here I show my skills and tell people my achievements. It is a full-stack application.',
          type: 'Full Stack Project',
          img: 'portfolio.png'
        },
        {
          naam: 'Webshop',
          dsc: 'Online shop with basket, prices and everything that you have in others webshops. You can add items and remover them from the basket. Made with JavaScript.',
          type: 'Frontend Project',
          img: 'shop.png'
        }
      ]
)