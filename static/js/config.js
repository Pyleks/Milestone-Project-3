// Required to load the CKeditor configuration correctly
CKEDITOR.editorConfig = function( config ) {
    // Removes auto paragraph
    config.autoParagraph = false;
    // Removes part of the toolbar in CKeditor
    config.toolbarGroups = [
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    ];
    // Removes remaining of the toolbar in CKeditor
    config.removeButtons = 'Underline,Italic,Bold,Strike,Subscript,Superscript,RemoveFormat';
    config.removePlugins = 'elementspath,resize';

};