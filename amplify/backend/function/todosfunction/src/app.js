/****************************************************
* Example get method *
****************************************************/
const listOfTodos = [
    {
        id: 1,
        title: 'Review the PR',
        done: false
    },
    {   
        id: 2,
        title: 'Attend the meeting',
        done: true 
    },
];

App.get('/todos', function(req, res) {
    // res.json({ success: 'get call succeed!', url: req.url });
    res.json(listOfTodos)
});

/****************************************************
* Example post method *
****************************************************/


App.post('/todos', function(req, res) {
    // Add your code here
    res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});