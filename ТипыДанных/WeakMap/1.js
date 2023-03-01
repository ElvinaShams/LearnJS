let messages = [
    {text: "Hello", from: "John"},
    {text: "Hello", from: "John"}
    ];
    
    let readMessages = new WeakSet();
    readMessages.add(messages[0]);
    readMessages.add(messages[1]);
    
    alert(messages.length);