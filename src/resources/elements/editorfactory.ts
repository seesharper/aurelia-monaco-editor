/**A factory class used to create new monaco editors */
export class EditorFactory
{                    
    /**
     * Creates a new editor       
     * @param {HTMLElement} domElement The {HTMLElement} for which to create the new editor.
     * @param {monaco.editor.IEditorConstructionOptions} [options] The options to create a new editor. 
     * @param {monaco.editor.IEditorOverrideServices} [services] 
     * @returns {Promise<monaco.editor.IStandaloneCodeEditor>} A promise that returns the new editor.
     */
    public createEditor(domElement: HTMLElement, options? : monaco.editor.IEditorConstructionOptions, services? : monaco.editor.IEditorOverrideServices) : Promise<monaco.editor.IStandaloneCodeEditor>
    {                                                
        return new Promise<monaco.editor.IStandaloneCodeEditor>((resolve, reject) => {
            requirejs(['vs/editor/editor.main'], _ => {
                resolve(monaco.editor.create(domElement, options, services));
            })
        })                        
    }
}