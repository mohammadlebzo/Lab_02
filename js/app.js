'use strict'

function takeInput()
{
    let name =prompt('Please Enter Your Name:').toUpperCase();
    //console.log(name);
    alert('Hello ' + name + '!');
    alert('Let\'s start with the questions.');
    let q1 = prompt('Do you think that i like a perrots?').toLowerCase();
    //console.log(q1);
    //Q1
    if(q1 != null)
    {
        switch(q1)
        {
            case 'yes':
                alert('correct');
                break;
            case 'no':
                alert('Wrong');
                break;
            default:
                alert('Please Enter Y/N Only.')
        }
    }
    let q2 = prompt('Do you think that i have a perrots?').toLowerCase();
    //console.log(q2);
    //Q2
    if(q2 != null)
    {
        switch(q2)
        {
            case 'yes':
                alert('correct');
                break;
            case 'no':
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
                alert('correct');
                break;
            case 'no':
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
                alert('Wrong');
                break;
            case 'no':
                alert('correct');
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
                alert('Wrong');
                break;
            case 'no':
                alert('correct');
                break;
            default:
                alert('Please Enter Y/N Only.')
        }
    }
    alert('Thank you for playing ' + name + "!");

    /*
    if(q1 == 'no' && q2 == 'no' && q3 == 'no' && q4 == 'yes' && q5 == 'yes')
    {
        alert('You have scored 0 point')
    }
    else if(q1 == 'yes' && q2 == 'no' && q3 == 'no' && q4 == 'yes' && q5 == 'yes')
    {
        alert('You have scored 1 point')
    }
    else if(q1 == 'yes' && q2 == 'yes' && q3 == 'no' && q4 == 'no' && q5 == 'no')
    {
        alert('You have scored 2 point')
    }
    else if(q1 == 'yes' && q2 == 'yes' && q3 == 'yes' && q4 == 'no' && q5 == 'no')
    {
        alert('You have scored 3 point')
    }
    else if(q1 == 'yes' && q2 == 'yes' && q3 == 'yes' && q4 == 'yes' && q5 == 'no')
    {
        alert('You have scored 4 point')
    }
    else if(q1 == 'yes' && q2 == 'yes' && q3 == 'yes' && q4 == 'yes' && q5 == 'yes')
    {
        alert('You have scored 5 point')
    }
    else
    */
}