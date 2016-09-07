import {autoinject, bindable, noView, customElement} from 'aurelia-framework'
import {EditorFactory} from './editorfactory'

//@noView
@customElement('monaco-editor')
export class MonacoEditor
{
    @bindable
    public options : monaco.editor.IEditorConstructionOptions;
    @bindable
    public value : any;

    private editorFactory : EditorFactory;
    private element : Element;

    constructor(element: Element, editorFactory : EditorFactory)
    {
        this.editorFactory = editorFactory;
        this.element = element;                
    }


    public attached() : Promise<any>
    {                    
        //let options : monaco.editor.IEditorConstructionOptions = {value : this.value, language : 'javascript'}
        return this.editorFactory.createEditor(this.element.children[0] as HTMLElement, this.options);        
    }
}