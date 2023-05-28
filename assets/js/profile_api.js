// const frontend_base_url = "https://jinyjin7.github.io/"
// const backend_base_url = "https://lucedude.link"
const backend_base_url = "http://127.0.0.1:5500"
const frontend_base_url = "http://127.0.0.1:8000"


console.log("프로필 api")

// 수정버튼으로 수정폼으로 이동
function redirectUpdatePage() {
    window.location.href = `profile_update.html?id=${users_id}`;

}

function ProfileNoUpdate() {
    window.location.href = `profile.html?id=${users_id}`;
}




//원래 반영되어있던 내용을 가져와서 보여줌
async function BeforeProfile(user_id) {

    const response = await fetch(`${backend_base_url}/user/${users_id}/`, {
        method: 'GET',
    });

    response_json = await response.json();
    console.log(response_json)


    $('#nickname').text(response_json.nickname);
    $('#email').text(response_json.email);
    $('#diary_count').text(response_json.my_diary.length);
    $('#likes_count').text(response_json.likes_diary.length);
    $('#bookmarked_diary_count').text(response_json.bookmark_diary.length);
    $('#followings').text(response_json.followings.length);
    $('#followers').text(response_json.followers.length);
    $('#introduction').text(response_json.introduction);

}



//프로필 수정
async function ProfileUpdate() {
    const nickname = document.getElementById('nickname').value;
    const introduction = document.getElementById('introduction').value;
    const img = document.getElementById('profile_img').files[0]
    const token = localStorage.getItem("access");



    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("introduction", introduction);
    formData.append("profile_img", img);

    const response = await fetch(`${backend_base_url}/user/`, {
        method: "PUT",
        headers: {
            Authorization: "Bearer " + token,
        },
        body: formData,
    });


    if (response.status == 200) {
        alert("프로필 수정 완료")
        window.location.href = "profile.html?id=" + users_id;
    } else if (nickname == '' || introduction == '') {
        alert("빈칸을 입력해 주세요.")
    } else {
        console.error("요청 실패:", response);
    }


}



// 프로필 북마크 게시글 불러오기
async function LoadBookmark() {
    const response = await fetch(`${backend_base_url}/user/${users_id}/`, {
        method: 'GET',
    });

    const data = await response.json();
    console.log(data)
    const DiaryList = document.getElementById('');
}