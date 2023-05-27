import React, { useState, useEffect } from 'react'
import getPictures from "./getPictures";

const INITIAL_PAGE = 1
export default function UsePictures(listid: string = "0") {
    const [loading, setLoading] = useState<boolean>(false);

    //For Pages
    const [loadingNextPage, setLoadingNextPage] = useState<boolean>(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const [gid, setGid] = useState(listid);
    const [hasNot, setHasNot] = useState(false);
    //---

    const [pictures, setPictures] = useState<any>([]);

    const userName = sessionStorage.getItem('userName');

    function initPictures() {
        setLoading(true);
        setHasNot(false);
        if (userName === null || userName === undefined) {
            setPictures([]);
            setLoading(false);
        } else {
            getPictures({ gid, page }).then((res: any) => {
                setPictures(res.data.pic);
                setLoading(false);
            });
        }

    }

    useEffect(function () {
        if (page === INITIAL_PAGE) {
            initPictures()
            return
        }

        setLoadingNextPage(true);

        getPictures({ gid, page })
            .then((nextPictures: any) => {
                if (nextPictures.data.pic.length < 6) {
                    setHasNot(true)
                }
                setPictures((prevPictures: any) => prevPictures.concat(nextPictures.data.pic))
                setLoadingNextPage(false);
            })
    }, [gid, page])

    return { hasNot, loading, loadingNextPage, pictures, setPage, setGid }  //, setPage
}
