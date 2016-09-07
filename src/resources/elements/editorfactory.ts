




/**A factory class used to create new monaco editors */
export class EditorFactory
{        
    
    /**
     * Creates an instance of EditorFactory.
     */
    public constructor()
    {        
        // Map 'vs' to the source code for the monaco editor.
        // This has to be 'vs' as all internal calls to require inside
        // the monaco editor are relative to 'vs'.
        // NOTE: This should probably point to the 'scripts' directory and 
        // the monaco editor NPM package should also be copied to the 'scripts'' directory        
        //requirejs.config({ paths: { 'vs': '../node_modules/monaco-editor/dev/vs' }});          
    }
    
    
    /**
     * Creates a new editor       
     * @param {HTMLElement} domElement The {HTMLElement} for which to create the new editor.
     * @param {monaco.editor.IEditorConstructionOptions} [options] The options to create a new editor. 
     * @param {monaco.editor.IEditorOverrideServices} [services] 
     * @returns {Promise<monaco.editor.IStandaloneCodeEditor>} A promise that returns the new editor.
     */
    public createEditor(domElement: HTMLElement, options? : monaco.editor.IEditorConstructionOptions, services? : monaco.editor.IEditorOverrideServices) : Promise<monaco.editor.IStandaloneCodeEditor>
    {                                        
        requirejs.config({ paths: { 'vs': '../node_modules/monaco-editor/dev/vs' }});
        return new Promise<monaco.editor.IStandaloneCodeEditor>((resolve, reject) => {
            requirejs(['vs/editor/editor.main'], _ => {
                resolve(monaco.editor.create(domElement, options, services));
            })
        })                        
    }
}