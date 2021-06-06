import { CollectionConfig } from 'payload/types';
import meta from '../fields/meta';
import slug from '../fields/Slug';



const Study: CollectionConfig = {
	slug: 'studies',
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: true,
		},
		{
      name: 'featuredImage',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
			required: true,
    },
		{
      name: 'client',
      label: 'Client',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
		},
		{
      name: 'location',
      label: 'Location',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
		},
		{
			name: 'cateogries',
			label: 'Categories',
			type: 'relationship',
			relationTo: 'categories',
			hasMany: true,
			admin: {
				position: 'sidebar',
			}

		},
		slug,
		meta,
	],
};

export default Study;