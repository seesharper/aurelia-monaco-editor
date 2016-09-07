import {autoinject, bindable, customElement} from 'aurelia-framework'
import {EditorFactory} from './editorfactory'

@customElement('monaco-editor')
export class MonacoEditor
{
    @bindable
    public options : monaco.editor.IEditorConstructionOptions;
    
    private editorFactory : EditorFactory;
    private element : Element;

    constructor(element: Element, editorFactory : EditorFactory)
    {
        this.editorFactory = editorFactory;
        this.element = element;                
    }

    public attached() : Promise<any>
    {                            
        return this.editorFactory.createEditor(this.element.children[0] as HTMLElement, this.options);        
    }
}