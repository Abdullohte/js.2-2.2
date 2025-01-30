const buttons = document.getElementsByClassName("plus");

for (let btn of buttons) {
    btn.addEventListener("click", () => {
        const num = +prompt("Nechta set olasiz?");

        switch (num) {
            case 1:
                alert("40 000 so'm");
                break;
            case 2:
                alert("80 000 so'm");
                break;
            case 3:
                alert("120 000 so'm");
                break;
            case 4:
                alert("160 000 so'm");
                break;
            case 5:
                alert("200 000 so'm");
                break;
            case 6:
                alert("240 000 so'm");
                break;
            case 7:
                alert("280 000 so'm");
                break;
            case 8:
                alert("320 000 so'm");
                break;
            case 9:
                alert("360 000 so'm");
                break;
            case 10:
                alert("400 000 so'm");
                break;
            default:
                if (num >=11) {
                    alert("faqat 10 ta set olish mumkin!");
                } else {
                    alert("nuh");
                }
                break;
        }
    });
}




