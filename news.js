let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];
let currentIndex = 0;
let interval = setInterval(readNews, 2000);

readNews();

let readNews = function () {
  if (currentIndex < news.length) {
    document.getElementById(
      "news"
    ).innerHTML = `${news[currentIndex].title}: ${news[currentIndex].content}`;
    currentIndex++;
  } else {
    clearInterval(interval);
  }
};


let formClick = function () {
        let title = document.getElementById("title").value;
        let content = document.getElementById("content").value;
        if (title && content) {
            let newItem = {
                id: news.length + 1,
                title: title,
                content: content
            };
            news.push(newItem);
            document.getElementById("title").value = "";
            document.getElementById("content").value = "";
            readNews();
        }
    };