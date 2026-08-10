import { useEffect, useState } from "react";

const EMPTY_VALUES = {
    title: "",
    author: "",
    content: "",
};

function PostForm({
    initialValues = EMPTY_VALUES,
    submitLabel = "저장",
    isSubmitting = false,
    onSubmit,
    onCancel,
}) {
    const [values, setValues] = useState(EMPTY_VALUES);
    const [formError, setFormError] = useState("");

    useEffect(() => {
        setValues({
            title: initialValues.title ?? "",
            author: initialValues.author ?? "",
            content: initialValues.content ?? "",
        });
    }, [initialValues]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const title = values.title.trim();
        const author = values.author.trim();
        const content = values.content.trim();

        if (!title) {
            setFormError("제목을 입력해주세요.");
            return;
        }

        if (!author) {
            setFormError("작성자를 입력해주세요.");
            return;
        }

        if (!content) {
            setFormError("내용을 입력해주세요.");
            return;
        }

        setFormError("");

        onSubmit({
            title,
            author,
            content,
        });
    };

    return (
        <form className="postForm" onSubmit={handleSubmit}>
            <label>
                제목
                <input
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="제목을 입력하세요"
                />
            </label>

            <label>
                작성자
                <input
                    name="author"
                    value={values.author}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="작성자를 입력하세요"
                />
            </label>

            <label>
                내용
                <textarea
                    name="content"
                    rows={8}
                    value={values.content}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="내용을 입력하세요"
                />
            </label>

            {formError && <p className="formError">{formError}</p>}

            <div className="actionGroup">
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={isSubmitting}
                    >
                        취소
                    </button>
                )}

                <button type="submit" className="primary" disabled={isSubmitting}>
                    {isSubmitting ? "처리 중..." : submitLabel}
                </button>
            </div>
        </form>
    );
}

export default PostForm;