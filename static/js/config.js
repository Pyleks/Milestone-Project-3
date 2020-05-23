CKEDITOR.editorConfig = function( config ) {
    config.autoParagraph = false;
    config.toolbarGroups = [
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    ];

    config.removeButtons = 'Underline,Italic,Bold,Strike,Subscript,Superscript,RemoveFormat';
    config.removePlugins = 'elementspath,resize';
};