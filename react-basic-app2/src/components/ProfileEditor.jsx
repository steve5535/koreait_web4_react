import { useRef, useState } from "react"

function ProfileEditor() {

    const sampleRef1 = useRef("");
    const sampleRef2 = useRef(0);

    sampleRef1.current = "123";
    sampleRef2.current = 500;

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        job: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }))
    }

    return (
        <div>
            <input type="text" name="name" placeholder="이름입력" onChange={handleChange}></input>
            <input type="email" name="email" placeholder="이메일 입력" onChange={handleChange}></input>
            <input type="text" name="job" placeholder="직업입력" onChange={handleChange}></input>
            <p>이름: {profile.name}</p>
            <p>이메일: {profile.email}</p>
            <p>직무: {profile.job}</p>
            <p>userRef값: {sampleRef1.current}</p>
        </div>
    )
}

export default ProfileEditor
