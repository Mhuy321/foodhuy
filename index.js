// let accountData = [
//     {
//         id: 1,
//         email: "admin@gmail.com",
//         username: "admin",
//         pass: "admin",
//     },

//     {
//         id: 2,
//         email: "tranhuyminh013@gmail.com",
//         username: "Minh Huy",
//         pass: "123",
//     }
// ];

// localStorage.setItem('account123', JSON.stringify(accountData));

var dataUser = JSON.parse(localStorage.getItem('account'))
console.log("🚀 ~ file: index.js:20 ~ dataUser:", dataUser)
// function getValue() {
//     event?.preventDefault() // ngăn load trang web
//     // lấy dữ liệu người dùng nhập 
//     let valueEmail = document.getElementById('exampleInputEmail1').value;
//     let valuePassword = document.getElementById('exampleInputPassword1').value;
//     let valueConfPassword = document.getElementById('exampleInputPassword2').value;

//     let dataUser = JSON.parse(localStorage.getItem('account')) // đọc dữ liệu tài khoản dưới localStorage 
//     console.log("🤔🤔🤔 ~ file: index.js:26 ~ getValue ~ dataUser:", dataUser)

//     let exists = false; // tạo biến để kiếm tra tài khoản có tồn tại hay không (true: là đã tồn tại, false: chưa tồn tại)
//     for (let i = 0; i < dataUser.length; i++) {
//         if (valueEmail === dataUser[i].email) { // nếu email người dùng nhập trùng vơi email dưới localStorage thì gán biến exists bằng true
//             exists = true;
//         }
//     }
//     return exists; // trả về giá trị của biến exists
// }




function checkEmail(email, password, type) {
    event?.preventDefault();
    let exists = false;
    for (let i = 0; i < dataUser.length; i++) {
        if (email === dataUser[i].email) {
            if (type === "login") {
                if (password === dataUser[i].password) {
                    exists = true;
                }
            } else {
                exists = true;
            }
            return exists;
        }
    }

}

///dang ky
// đọc dữ liệu tài khoản dưới localStorage
function handleRegister() {
    event?.preventDefault() // ngăn load trang web
    let valueEmail = document.getElementById('exampleInputEmail1').value;
    let valuePassword = document.getElementById('exampleInputPassword1').value;
    let valueConfPassword = document.getElementById('exampleInputPassword2').value;
    if (valueEmail !== '' && valuePassword !== '') {
        if (checkEmail(valueEmail, valuePassword, valueConfPassword)) {
            alert('Email already exists')
        } else {
            if (valuePassword === valueConfPassword) {
                dataUser.push({ id: dataUser.length + 1, email: valueEmail, password: valuePassword })
                localStorage.setItem('account', JSON.stringify(dataUser))
                alert('Register success') // ngược lại thông báo email hợp lệ
            } else {
                alert('Confirm Password fail') // ngược lại thông báo email hợp lệ
            }
        }
    } else {
        alert('Please enter your email and password')
    }
}

///form dang nhap
function handleLogin() {
    event?.preventDefault()
    let valueEmail = document.getElementById('exampleInputEmail1').value;
    let valuePassword = document.getElementById('exampleInputPassword1').value;
    if (valueEmail !== '' && valuePassword !== '') {
        if (checkEmail(valueEmail, valuePassword.toString(), 'login')) {
            alert('Login successful')
            window.location.href = 'theBand.html'
        } else {
            alert('Account not found')
        }
    } else {
        alert('Please enter email and password')
    }
}





let valueEmail = document.getElementById("exampleInputEmail1").value;
let valuePassword = document.getElementById('exampleInputPassword1').value;

for (let i = 0; i < dataUser.length; i++) {
    if (dataUser[i].email === valueEmail && dataUser[i].password === valuePassword) {
        alert("login successful")
    } else {

    }
}