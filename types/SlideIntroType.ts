import { ImageSourcePropType } from "react-native"

export type SlideIntroType = {
    id: string,
    title: string,
    text: string,
    image: ImageSourcePropType,
    backgroundColor: string,
    icon ?: string
}