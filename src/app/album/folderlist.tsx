import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FolderType } from "./page"
import Link from "next/link"

const Folderlist = ({folder}:{folder:FolderType}) => {
  return (
    <div>
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{folder.name} </CardTitle>
        <CardDescription>Please click on view now to view Pictures</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Link href={`/album/${folder.name}`}>
        <Button>View Album</Button>
        </Link>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Folderlist
