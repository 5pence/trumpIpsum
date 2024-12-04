// // getters
// const taskInput = document.getElementById('new-task');
// const addTaskButton = document.getElementById('add-task');
// const todoList = document.getElementById('todo-list');

// /**
//  * This handles adding a new task
//  */
// function addTask() {
//     const taskText = taskInput.value.trim();

//     if (taskText === '') {
//         alert('Please enter a task!');
//         return;
//     }

//     // Create a new list item
//     const listItem = document.createElement('li');

//     // Create a span for the task text
//     const taskSpan = document.createElement('span');
//     taskSpan.textContent = taskText;

//     // Create a delete button
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.addEventListener('click', () => {
//         listItem.remove();
//     })

//     listItem.appendChild(taskSpan);
//     listItem.appendChild(deleteButton);

//     todoList.appendChild(listItem);

//     // Clear the input field
//     taskInput.value = '';
// }

// // Event listener for adding a task
// addTaskButton.addEventListener('click', addTask);

// // Allow the user to add tasks by pressing the enter key
// taskInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//         addTask();
//     }
// });




// ====================================================


// getters
const paragraphs = document.getElementById('paragraphs');
const generate = document.getElementById('generate');
const outputArea = document.getElementById('output');

// Array of Trumpisms
const trumpsims = [
    "Make America Great Again.",
    "Nobody knows more about this than me.",
    "They're eating the dogs! They're eating the cats.",
    "I could stand in the middle of 5th Avenue and shoot somebody and I wouldn't lose voters.",
    "It's gonna be Huuuuuge.",
    "I don't have small hands and believe I've never had any compllaints in that area.",
    "We're going to build a wall, and it's going to be a big, beautiful wall.",
    "I know words. I have the best words.",
    "I'm a very stable genius.",
    "Fake news! Sad.",
    "We will win so much, you may even get tired of winning.",
    "Believe me, it’s tremendous.",
    "It’s going to be huge.",
    "I have a great relationship with everybody.",
    "Jobs, jobs, jobs!",
    "The best people. Just incredible people.",
    "Despite the constant negative press covfefe.",
    "Sometimes by losing a battle you find a new way to win the war.",
    "I see the disinfectant where it knocks it out in a minute. One minute. And is there a way we can do something like that, by injection inside or almost a cleaning?",
    "Do you mind if I sit back a little? Because your breath is very bad.",
    "And you know Mexico is going to pay for it!",
    "Nobody does it better than me, believe me...",
    "The numbers was the best there have ever been and quite possibly the best they'll ever be.",
    "Sometimes your best investments are the ones you don't make."
]

/**
 * Function to generate random paragraphs
 *  
 * */ 
function generateTrumpIpsum(paragraphCount) {
    output = '';
    for (let i = 0; i < paragraphCount; i++) {
        // get a random number from 3 to 7
        const sentenceCount = Math.floor(Math.random() * 5) + 3;
        const sentences = [];
        for (let j = 0; j < sentenceCount; j++) {
            const randomIndex = Math.floor(Math.random() * trumpsims.length);
            sentences.push(trumpsims[randomIndex]);
        }
        output += `<p>${sentences.join(' ')}</p>`
    }
    console.log(output);
    return output;
}

generate.addEventListener('click', () => {
    let counter = parseInt(paragraphs.value);
    outputArea.innerHTML = generateTrumpIpsum(counter);
})

