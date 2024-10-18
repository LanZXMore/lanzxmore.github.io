function validateCredentials() {
    const Uname = 'LanZX'; // 设置正确的用户名
    const PW = 'lanzx'; // 设置正确的密码

    const inputUname = document.getElementById('username').value;
    const inputPW = document.getElementById('password').value;

    if (inputUsername === Uname && inputPassword === PW) {
        // alert('用户名和密码正确，欢迎访问！');
        document.getElementById('protected-content').style.display = 'block'; // 显示保护内容
        document.getElementById('credentials-form').style.display = 'none'; // 隐藏用户名和密码输入框
    } else {
        alert('用户名或密码错误，请重试。');
    }
}