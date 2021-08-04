'use strict'

function takeInput()
{
    let corrCounter = 0;
    let name =prompt('Please Enter Your Name:').toUpperCase();
    //console.log(name);
    alert('Hello ' + name + '!');
    alert('Let\'s start with the questions.');
    alert('You can enter yes/no or y/n');
    let q1 = prompt('Do you think that i like a perrots?').toLowerCase();
    //console.log(q1);
    //Q1
    if(q1 != null)
    {
        switch(q1)
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
    let q2 = prompt('Do you think that i have a perrot?').toLowerCase();
    //console.log(q2);
    //Q2
    if(q2 != null)
    {
        switch(q2)
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

    let q3 = prompt('I know some programming languages, but do you think i know how to write Python code?').toLowerCase();
    //console.log(q3);
    //Q3
    if(q3 != null)
    {
        switch(q3)
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

    let q4 = prompt('Do you think i use social media').toLowerCase();
    //console.log(q4);
    //Q4
    if(q4 != null)
    {
        switch(q4)
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
    
    let q5 = prompt('Do you think that i use a Mac operating system ').toLowerCase();
    //console.log(q5);
    
    //Q5
    if(q5 != null)
    {
        switch(q5)
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

    let q6 = Number (prompt('How many perrots do you think i have?'));
    if(q6 == 6)
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
            if(q6 == 6)
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
            else if(q6 <= 4)
            {
                alert('Too low, try again.')
            }
            else if(q6 >=8)
            {
                alert('Too high, try again.')
            }
            else if(q6 == 5 || q6 ==7)
            {
                alert('YOUR TOO CLOSE, try again.')
            }
            alert('You have ' + --wroCount + ' more tries.');
            q6 = prompt('How many perrots do you think i have?');
            count++;
            
        }
    }

    let q7 = prompt('To create an unorderd list in markdown you need to add a ____ sign in front of the line.');
    let answers = ['-', '+', '*'];
    if(q7 == answers[0])
    {
        alert('correct');
        corrCounter++;
    }
    else if(q7 == answers[1])
    {
        alert('correct');
        corrCounter++;
    }
    else if(q7 == answers[2])
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
            if(q7 == answers[0])
            {
                 alert('correct');
                 corrCounter++;
                 break;
            }
            else if(q7 == answers[1])
            {
                alert('correct');
                corrCounter++;
                break;
            }
            else if(q7 == answers[2])
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
            q7 = prompt('To create an unorderd list in markdown you need to add a ____ sign in front of the line.');
            count++;
        }
    }

    alert('Thank you for playing ' + name + "! \nYour score: " + corrCounter);

}