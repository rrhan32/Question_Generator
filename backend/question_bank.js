function create_question_bank(){
    const question_bank = [
        {
            dificulty: "easy",
            question: "What is the capital of France?",
            options: ["Paris", "London", "Rome", "Berlin"],
            points : '2'
            
        },
        {
            dificulty: "easy",
            question: "How many continents are there on Earth?",
            options: ["5", "6", "7", "8"],
            points : '2'
        },
        {
            dificulty: "easy",
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            points : '2'
        },
        {
            dificulty: "easy",
            question: "Which of the following is a primary color?",
            options: ["Green", "Orange", "Purple", "Red"],
            points : '2'
        },
        {
            dificulty: "easy",
            question: "What is the main component of air we breathe?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            points : '2'
        },
        {
            dificulty: "medium",
            question: "In which year did World War II end?",
            options: ["1943", "1945", "1950", "1960"],
            points : '4'
        },
        {
            dificulty: "medium",
            question: "Who wrote the play 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
            points : '4'
        },
        {
            dificulty: "medium",
            question: "What is the currency of Japan?",
            options: ["Yen", "Won", "Ringgit", "Peso"],
            points : '4'
        },
        {
            dificulty: "medium",
            question: "Which planet is known as the 'Red Planet'?",
            options: ["Earth", "Mars", "Venus", "Jupiter"],
            points : '4'
        },
        {
            dificulty: "medium",
            question: "What is the largest mammal on Earth?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
            points : '4',
        },
        {
            dificulty: "hard",
            question: "Who formulated the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Max Planck"],
            points : '8',
          },
          {
            dificulty: "hard",
            question: "What is the capital of Bhutan?",
            options: ["Thimphu", "Kathmandu", "Ulaanbaatar", "Seoul"],
            points : '8',
          },
          {
            dificulty: "hard",
            question: "In which year was the Magna Carta signed?",
            options: ["1066", "1215", "1348", "1492"],
            points : '8',
          },
          {
            dificulty: "hard",
            question: "Who developed the first successful polio vaccine?",
            options: ["Jonas Salk", "Albert Sabin", "Edward Jenner", "Louis Pasteur"],
            points : '8',
          },
          {
            dificulty: "hard",
            question: "What is the chemical symbol for the element gold?",
            options: ["Gd", "Au", "Ag", "Fe"],
            points : '8',
          },
        
    ];
    return question_bank;

}
module.exports=create_question_bank;