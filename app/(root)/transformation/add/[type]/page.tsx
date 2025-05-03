import Header from '@/components/Header'
import React from 'react'

import { transformationTypes } from '@/constants'
import Transformation from '@/components/Transformation';
import { auth } from '@clerk/nextjs/server';
import { getUserById } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation'

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
    const transformation = transformationTypes[type];
    // const {userId} = await auth();

    // if(!userId) redirect('/sign-in')

    // const user = await getUserById(userId)
    return (
        <>
            <Header
                title={transformation.title}
                subtitle={transformation.subTitle}
            />

            {/* <Transformation /> */}
            
        </>

    )
}

export default AddTransformationTypePage
