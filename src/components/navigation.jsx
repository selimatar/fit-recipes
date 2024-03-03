import React from 'react'
import Link from 'next/link'
import client from '../app/contentfulClient'

async function getNavigations() {
    try {
        const res = await client.getEntries({ 
            'content_type': 'navigation', 
            'fields.internal_title': 'Main Navigation'
        });

        const navigations = await Promise.all(
            res.items[0].fields.sub_navigations.map(async subNavigation => {
                return await getSubNavigation(subNavigation.sys.id)
            }
        ))

        return navigations;
    } catch (error) {
        console.log('Client error main navigation', error);
        return [];
    }
}

async function getSubNavigation(entryId ) {
    try {
        const res = await client.getEntry(entryId);
        return res;
    } catch (error) {
        console.log('Client error navigation', error);
        return [];
    }
}

export default async function Navigation() {
    const navigations = await getNavigations();

    return (
        <nav className="space-x-4">
            {navigations && navigations.map(navigation => {
                if(navigation.fields.slug) {
                    return (
                        <Link
                            key={navigation.sys.id}
                            href={"/" + navigation.fields.slug}
                            className="hover:text-gray-300"
                        >
                            {navigation.fields.internal_title}
                        </Link>
                    )
                }
            })}
        </nav>
    );
}