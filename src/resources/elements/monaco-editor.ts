import {autoinject, bindable, customElement} from 'aurelia-framework'
import {EditorFactory} from './editorfactory'

@customElement('monaco-editor')
export class MonacoEditor
{
    @bindable
    public options : monaco.editor.IEditorConstructionOptions;            
    
    public editorHost : HTMLElement;
    private editorFactory : EditorFactory;

    constructor(editorFactory : EditorFactory)
    {
        this.editorFactory = editorFactory;                        
    }

    public attached() : void
    {                                             
        this.editorFactory.createEditor(this.editorHost, this.options)                       
    }
}