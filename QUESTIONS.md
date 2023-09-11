# Questions

Here are some comments and questions about the project.


# Comments and Questions you may have

## Why React?

First of all I want to acknowledge that react could be seen as an overkill for a project like this, but I do have a couple of reasons.

- First and foremost this is for a Full-stack Engineer position so it felt just right to show you a bit of not only the technologies I use but some project/folder management.
- React gives me the chance to not only test the main logic but use Jest to test the front end components.
- I am able to show you the way I use react and Typescript since that is the company's stack.

## Why not divide into more components?
I am able to divide the components somewhat but I decided to not do it too much. I thought I was going overboard doing home/form/input/button separetly so I jusy stuck with input as an example of component base work.

However "home.tsx" can be made into a component and still work in an existing react project. So even if this was not as divided as I intended, it can be implemented as if it was a feature in a website with not much change.


## Constants in helpers.ts

As you may have seen, in helper.ts I added the pounds per dog size and percentage as variables, which is sufficient for the problem but it can be enhanced. I did it like that to ensure flexibility to update the logic. In the future a 30% is recommended or portions may change, or a size is added. To enhance it I would add these variables to a json instead of stand alone variables, This approach was the simplest way to solve the problem with the time given.

# Question I Have

## Math portion of the assigment

First, thank you for clarifying the math for me, but there is some instances where I question the result. In the question it says that they would have to ask for "At least 20%" more food than the minimum for every dog. For example if we have 1 of each dog and 60lb of leftover food, then they would have to order no more food. Which means that they will have exactly the minimum needed amount, I get why that is, but in a real life scenario maybe a discussion is necessary. 