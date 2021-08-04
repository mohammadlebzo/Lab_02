'use strict'
let corrCounter = 0;
function takeInput()
{
    
    let name =prompt('Please Enter Your Name:').toUpperCase();
    //console.log(name);
    alert('Hello ' + name + '!');
    alert('Let\'s start with the questions.');
    alert('You can enter yes/no or y/n');
    let q1 = prompt('Do you think that i like perrots?').toLowerCase();
    answerYes(q1);

    let q2 = prompt('Do you think that i have a perrot?').toLowerCase();
    answerYes(q2);

    let q3 = prompt('I know some programming languages, but do you think i know how to write Python code?').toLowerCase();
    answerYes(q3);

    let q4 = prompt('Do you think i use social media').toLowerCase();
    answerNo(q4);
    
    let q5 = prompt('Do you think that i use a Mac operating system ').toLowerCase();
    answerNo(q5);

    let q6 = Number (prompt('How many perrots do you think i have?'));
    takeInputQ6(q6);

    let q7 = prompt('To create an unorderd list in markdown you need to add a ____ sign in front of the line.');
    takeInputQ7(q7);

    alert('Thank you for playing ' + name + "! \nYour score: " + corrCounter);

}

function answerYes(q)
{
    //console.log(q);
    if(q != null)
    {
        switch(q)
        {
            case 'yes':
            case 'y':
                alert('correct');
                corrCounter++;
                break;
            case 'no':
            case 'n':
                alert('Wrong');
                break;
            default:
                alert('Please Enter Y/N Only.')
        }
    }
}

function answerNo(q)
{
    //console.log(q);
    if(q != null)
    {
        switch(q)
        {
            case 'yes':
            case 'y':
                alert('Wrong');
                break;
            case 'no':
            case 'n':
                alert('correct');
                corrCounter++;
                break;
            default:
                alert('Please Enter Y/N Only.')
        }
    }
}
function takeInputQ6(q)
{
    if(q == 6)
    {
        alert('correct');
        corrCounter++;
    }
    else
    {
        let wroCount = 4;
        let count = 0;
        for(let i = 0; i < 4; i++)
        {
            if(q == 6)
            {
                 alert('correct');
                 corrCounter++;
                 break;
            }
            else if(count == 3)
            {
                alert('Sorry, the right answer was 6');
                break;
            }
            else if(q <= 4)
            {
                alert('Too low, try again.')
            }
            else if(q >=8)
            {
                alert('Too high, try again.')
            }
            else if(q == 5 || q6 ==7)
            {
                alert('YOUR TOO CLOSE, try again.')
            }
            alert('You have ' + --wroCount + ' more tries.');
            q = prompt('How many perrots do you think i have?');
            count++;
            
        }
    }
}
function takeInputQ7(q)
{
    let answers = ['-', '+', '*'];
    if(q == answers[0])
    {
        alert('correct');
        corrCounter++;
    }
    else if(q == answers[1])
    {
        alert('correct');
        corrCounter++;
    }
    else if(q == answers[2])
    {
        alert('correct');
        corrCounter++;
    }
    else
    {
        let wroCount = 6;
        let count = 0;
        for(let i = 0; i < 6; i++)
        {
            if(q == answers[0])
            {
                 alert('correct');
                 corrCounter++;
                 break;
            }
            else if(q == answers[1])
            {
                alert('correct');
                corrCounter++;
                break;
            }
            else if(q == answers[2])
            {
                alert('correct');
                corrCounter++;
                break;
            }
            else if(count == 5)
            {
                alert('Sorry, the right answers were ' + answers[0] + ' ' + answers[1] + ' ' + answers[2]);
                break;
            }
            alert('Wrong, you have ' + --wroCount + ' more tries.');
            q = prompt('To create an unorderd list in markdown you need to add a ____ sign in front of the line.');
            count++;
        }
    }

}