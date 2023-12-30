export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {



    try{
      
        return NextResponse.json({
            status: 200,
            statusText: 'OK',
            body:'{"message":"Hello World"}'
        })
        

    }
    catch(e){

        return NextResponse.json({
            status: 500,
            statusText: 'Internal Server Error',
            body: 'Internal Server Error'
        })
    }
}

