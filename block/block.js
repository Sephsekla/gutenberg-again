/**
 * Hello World: Step 3
 *
 * Editable "Hello World" text.  Introduces the concept of attributes and
 * extracting them, and the default text formatting added by RichText.
 */
( function( blocks, editor, i18n, element ) {
	var el = element.createElement;
	var __ = i18n.__;
	var RichText = editor.RichText;
	var TextControl = wp.components.TextControl;

	wp.i18n.setLocaleData( { '': {} }, 'gutenberg-examples' );

	blocks.registerBlockType( 'gutenberg-examples/example-03-editable', {
		title: __( 'Example: Editable', 'gutenberg-examples' ),
		icon: 'universal-access-alt',
		category: 'layout',

		attributes: {
			content: {
				type: 'string',
				source: 'meta',
				selector: 'p',
				meta: 'test-meta'

			},
		},

		edit: function( props ) {
			var content = props.attributes.content;
			var focus = props.focus;
			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
			}


			return el(
				TextControl,
				{
					tagName: 'p',
					className: props.className,
					onChange: onChangeContent,
					value: content,
				}
			);
		},

		save: function( props ) {
			return
		},
	}
	 );

	 blocks.registerBlockType( 'gutenberg-examples/example-03-editable3', {
		title: __( 'Example: Editable non-meta', 'gutenberg-examples' ),
		icon: 'universal-access-alt',
		category: 'layout',

		attributes: {
			content: {
				type: 'string',
				source: 'attribute',
				selector: 'p',

			},
		},

		edit: function( props ) {
			var content = props.attributes.content;
			var focus = props.focus;
			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
			}


			return el(
				TextControl,
				{
					tagName: 'p',
					className: props.className,
					onChange: onChangeContent,
					value: content,
				}
			);
		},

		save: function( props ) {
			return el('h3',{
				className: 'test-h3',
			},props.attributes.content);
		},
	}
);

} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element
);
