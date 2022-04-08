import TopNavbar from "~/components/topnavbar"
import React, { useRef, useState } from 'react';

import { Editor } from '@tinymce/tinymce-react';
import Footer from "~/components/footer";
import { ActionFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const action: ActionFunction = async ({ request, params }: any) => {
    const formData = await request.formData();
    const konten = formData.get("postingan");
    console.log(konten)
    return redirect("/");
};

export default function CreatePost() {
    const [text, setText] = useState("Test");
    return (
        <>
            <TopNavbar />
            <div className="text-white mt-20 mr-60 ml-60">
                <h1 className="text-4xl font-bold">Create Post</h1>
                <p className="mt-5">Buat postingan dan unggah materi kuliahmu, catatan kuliah, referensi-referensi yang kamu ikuti dan ide-ide kamu di sini.</p>
                <div className="mt-10">
                    <Form method="post">
                        <div className="mt-5 flex flex-col">
                            <input className="pl-5 text-black rounded-lg h-10" type="text" placeholder="Judul Materi, Catatan, Ide"></input>
                        </div>
                        <div className="text-black mt-5 flex flex-col">
                            <label className="text-white">Kategori</label>
                            <select className="pl-5 mt-2 h-10 rounded-lg" id="category" name="category">
                                <option value="materi">Materi kuliah</option>
                                <option value="catatan">Catatan kuliah</option>
                                <option value="referensi">Referensi</option>
                                <option value="ide">Ide</option>
                            </select>
                        </div>
                        <div className="mt-10">
                            <Editor
                                // onInit={(evt, editor) => editorRef.current = editor}
                                initialValue="<p>Ayo unggah dan bagikan materi kuliahmu di sini supaya yang lain juga bisa belajar seperti kamu.</p>"
                                init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
                                        'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                                        'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                    ],
                                    toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                                        'alignleft aligncenter alignright alignjustify | ' +
                                        'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                                onEditorChange={(newText) => setText(newText)}
                            />
                        </div>
                        <div className="flex justify-center">
                            <input type="hidden" id="postingan" name="postingan" value={text}></input>
                            <input type="submit" className="mt-10 text-xl font-bold text-white hover:text-sky-500 py-2 px-20 border-2 rounded-lg border-white hover:border-sky-500 bg-black hover:font-bold" value="Create Post"></input>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    )
}