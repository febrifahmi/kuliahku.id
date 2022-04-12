import TopNavbar from "~/components/topnavbar"
import React, { useRef, useState } from 'react';

import { Editor } from '@tinymce/tinymce-react';
import Footer from "~/components/footer";
import { ActionFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request, params }: any) => {
    const formData = await request.formData();
    const title = formData.get("judul");
    const lead = formData.get("category");
    const body = formData.get("postingan");
    // console.log(judul,kategori,konten)
    if (
        typeof title !== "string" ||
        typeof lead !== "string" ||
        typeof body !== "string"
    ) {
        throw new Error(`Form not submitted correctly.`);
    }

    const post = await db.post.create({
        data: { title, lead, body },
    });

    return redirect("/posts");
};

export default function CreatePost() {
    const [text, setText] = useState("Test");
    return (
        <>
            <TopNavbar />
            <div className="text-white mt-20 mr-60 ml-60">
                <h1 className="text-4xl font-bold">Buat Postingan</h1>
                <p className="mt-5">Buat postingan dan unggah materi kuliahmu, catatan kuliah, referensi-referensi yang kamu ikuti dan ide-ide kamu di sini.</p>
                <div className="mt-10">
                    <Form method="post">
                        <div className="mt-5 flex flex-col">
                            <input className="pl-5 text-black rounded-lg h-10" type="text" placeholder="Judul Materi, Catatan, Ide" name="judul"></input>
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
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                    valid_elements: "@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|onclick|ondblclick|"
                                        + "onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|"
                                        + "onkeydown|onkeyup],a[rel|rev|charset|hreflang|tabindex|accesskey|type|"
                                        + "name|href|target|title|class|onfocus|onblur],strong/b,em/i,strike,u,"
                                        + "#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|"
                                        + "src|border|alt=|title|hspace|vspace|width|height|align],-sub,-sup,"
                                        + "-blockquote,-table[border=0|cellspacing|cellpadding|width|frame|rules|"
                                        + "height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|"
                                        + "height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,"
                                        + "#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor"
                                        + "|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,"
                                        + "-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face"
                                        + "|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],"
                                        + "object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width"
                                        + "|height|src|*],map[name],area[shape|coords|href|alt|target],bdo,"
                                        + "button,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|"
                                        + "valign|width],dfn,fieldset,form[action|accept|accept-charset|enctype|method],"
                                        + "input[accept|alt|checked|disabled|maxlength|name|readonly|size|src|type|value],"
                                        + "kbd,label[for],legend,noscript,optgroup[label|disabled],option[disabled|label|selected|value],"
                                        + "q[cite],samp,select[disabled|multiple|name|size],small,"
                                        + "textarea[cols|rows|disabled|name|readonly],tt,var,big"
                                }}
                                onEditorChange={(newText) => setText(newText)}
                            />
                        </div>
                        <div className="flex justify-center">
                            <input type="hidden" id="postingan" name="postingan" value={text}></input>
                            <input type="submit" className="mt-10 text-xl font-bold text-white hover:text-sky-500 py-2 px-20 border-2 rounded-lg border-white hover:border-sky-500 bg-black hover:font-bold" value="Simpan"></input>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    )
}