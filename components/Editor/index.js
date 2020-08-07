import dynamic from 'next/dynamic';
const FroalaEditorComponent = dynamic(import('react-froala-wysiwyg'), {
  ssr: false,
})


const Editor = () => {
  return <FroalaEditorComponent tag='textarea' />
}

export default Editor
