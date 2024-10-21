function Heading(tag = "h1", content) {
    const node = document.createElement(tag);
    node.textContent = content;
    return node;
  }
  
  function HeadingWithButton(tag = "h1", content) {
    const divcontainer = document.createElement('div');
    divcontainer.setAttribute('class', "divcont");
  
    const node = document.createElement(tag);
    node.textContent = content;
  
    const button = document.createElement("button");
    button.textContent = "Explore Showcase";
    button.setAttribute('class', 'headButton');
  
    divcontainer.append(node);
    divcontainer.append(button);
  
    return divcontainer;
  }
  
  function Grid() {
    const node = document.createElement("ul");
    node.setAttribute("class", "grid");
    return node;
  }
  
  function button1(props){
    const button1 = document.createElement("button");
  
    button1.textContent = "Explore";
    button1.style.color = props.color;
    button1.style.backgroundColor = props.backgroundColor;
    button1.setAttribute('class', 'button1');
  
    return button1;
  }
  
  function Card(props) {
    const node = document.createElement("li");
    node.setAttribute("class", "card");
  
    const heading = Heading("h3", props.name);
  
    const paragraph = document.createElement("p");
    paragraph.textContent = props.content;
  
    node.style.background = props.backgroundcolor;
    paragraph.style.color = props.textcolor;
    heading.style.color = props.hcolor;
  
    const button11 = button1({
      text: props.buttontext,
      color: props.buttoncolor,
      backgroundColor: props.buttonbackcolor
  
    })
  
    node.append(heading);
    node.append(paragraph);
    node.append(button11)
  
  
    
  
    return node;
  }
  
  function Page(props) {
    const node = document.createElement('section');
  
    const h1 = HeadingWithButton("h1", "Last works");
    const grid = Grid();
  
    const cards = props.map((content) => Card(content));
  
    node.append(h1);
    node.append(grid);
  
    grid.append(...cards);
  
    return node;
  }
  
  function renderPage(data) {
    const page = Page(data);
    document.body.append(page);
  }
  
  function loadData() {
    return [
      {
        name: "Startup Framework",
        content: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",  
        backgroundcolor: "#EBEAED",
        textcolor: "#1E0E62",
        hcolor: "#1E0E62",
        buttonbackcolor: "#FFFFFF",
        buttoncolor: "#1E0E62"
  
      },
      {
        name: "Web Generator",
        content: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
        textcolor: "#15143966",
        hcolor: "#1E0E62",
        buttonbackcolor: "#25DAC5",
        buttoncolor: "#FFFFFF"
  
      },
      {
        name: "Slides 4",
        content: "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.",
        backgroundcolor: "#482BE7",
        textcolor: "#FFFFFF",
        hcolor: "#FFFFFF",
        buttonbackcolor: "#FFFFFF",
        buttoncolor: "#1E0E62"
        
      },
      {
        name: "Postcards",
        content: "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.",
        buttonbackcolor: "#FFFFFF",
        buttoncolor: "#1E0E62"
      }
    ];
  }
  
  function initApp() {
    const data = loadData();
    renderPage(data);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    initApp();
  });
  
  