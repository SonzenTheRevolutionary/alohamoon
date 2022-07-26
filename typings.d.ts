export interface Post {
    _id: string;
    title: string;

    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    }

    backgroundImage: {
        asset: {
            url: string;
        };
    }
    postNumber: number;

    slug: {
        current: string;
    }
    categories

    body: [object];
}

export interface Price_Menu {
    _id: string;
    title: string;
    description: string;
    Image: {
        asset: {
            url: string;
        };
    }
    price: string;
    menuNumber: number;
}

export interface Hours_Background {
    backgroundImage: {
        asset: {
            url: string;
        };
    }
}