function darkmode() {
    var TcsDarkMode = document.body;
    TcsDarkMode.classList.toggle("dark-mode");
    
    var theme;

    if(TcsDarkMode.classList.contains("dark-mode")){
        console.log("dark-mode");
        theme = "DARK";
    }else{
        console.log("Light mode");
        theme ="LIGHT";
    }
    // salvando na localStorage

    localStorage.setItem("PageTheme", JSON.stringify(theme));
    
}


let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

if(GetTheme === "DARK"){
    document.body.classList = "dark-mode";
}
