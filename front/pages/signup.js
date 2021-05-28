import Head from "next/head";
import React, { useCallback, useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import AppLayout from "../compoments/AppLayout";
import useInput from "../hooks/useInput";
import styled from "styled-components";
// const [passwordCheck, onChangePasswordCheck] = useInput("");
// 패스워드 체크는 다른지 같은지 확인 해야되서 커스텀 훅 사용 안함
const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {
    const [id, onChangeId] = useInput("");
    const [nickname, onChangeNickname] = useInput("");
    const [password, onChangePassword] = useInput("");

    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwrodError, setPasswordError] = useState(false);
    const [term, setTerm] = useState("");
    const [termError, setTermError] = useState(false);

    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordCheck(e.target.value);
            setPasswordError(e.target.value !== password);
        },
        [password]
    );

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);
    const onSunmit = useCallback(() => {
        if (password !== passwordCheck) return setPasswordError(true);
        if (!term) return setTermError(true);

        console.log(id, nickname, password);
    }, [password, passwordCheck, term]);

    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSunmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input
                        name="user-id"
                        value={id}
                        required
                        onChange={onChangeId}
                    />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input
                        name="user-nick"
                        value={nickname}
                        required
                        onChange={onChangeNickname}
                    />
                </div>
                <div>
                    <label htmlFor="user-nick">비밀번호</label>
                    <br />
                    <Input
                        name="user-password"
                        type="password"
                        value={password}
                        required
                        onChange={onChangePassword}
                    />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        value={passwordCheck}
                        type="password"
                        required
                        onChange={onChangePasswordCheck}
                    />
                    {passwrodError && (
                        <ErrorMessage>
                            비밀번호가 일치 하지 않습니다.
                        </ErrorMessage>
                    )}
                </div>
                <div>
                    <Checkbox
                        name="user-term"
                        checked={term}
                        onChange={onChangeTerm}
                    >
                        체크
                    </Checkbox>
                    {termError && (
                        <ErrorMessage>약관에 동의 하셔야합니다.</ErrorMessage>
                    )}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit">
                        가입하기
                    </Button>
                </div>
            </Form>
        </AppLayout>
    );
};

export default Signup;
