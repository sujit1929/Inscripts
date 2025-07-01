// SpreadsheetDashboard.tsx
// This component represents a spreadsheet-style dashboard for the Inscripts internship assignment.


import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Download, Eye, Filter, Plus, Search, Share2, Upload } from "lucide-react"

const tasks = [
  {
    id: 1,
    jobRequest: "Launch social media campaign for pro...",
    submitted: "15-11-2024",
    status: "In progress",
    submitter: "Asha Patel",
    url: "www.ashapatel...",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "5,200,000",
  },
  {
    id: 2,
    jobRequest: "Update the site with new February offers",
    submitted: "28-10-2024",
    status: "Need Review",
    submitter: "Mark Johnson",
    url: "www.markjohnso...",
    assigned: "Tolu Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: "3,600,000",
  },
  {
    id: 3,
    jobRequest: "Finalize user testing feedback for app...",
    submitted: "05-10-2024",
    status: "In progress",
    submitter: "Mark Johnson",
    url: "www.markjohnso...",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-10-2024",
    estValue: "4,750,000",
  },
  {
    id: 4,
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen...",
    assigned: "Tim Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: "5,900,000",
  },
  {
    id: 5,
    jobRequest: "Prepare financial report for Q4",
    submitted: "26-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabro...",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: "2,800,000",
  },
]

// Style helpers for status and priority badges
const getStatusColor = (status: string) => {
  switch (status) {
    case "In progress":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "Need Review":
      return "bg-orange-100 text-orange-800 border-orange-200"
    case "Complete":
      return "bg-green-100 text-green-800 border-green-200"
    case "Blocked":
      return "bg-red-100 text-red-800 border-red-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800 border-red-200"
    case "Medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "Low":
      return "bg-blue-100 text-blue-800 border-blue-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export default function SpreadsheetDashboard() {
  return (
    <div className="w-full h-screen bg-white">
      <div className="flex items-center justify-between p-4 border-b bg-gray-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="font-medium">Spreadsheet 3</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search online ideas..." className="pl-10 w-64" />
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="w-4 h-4" />
          </Button>
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">JD</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 border-b bg-gray-50">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">Sort bar</Button>
          <Button variant="outline" size="sm">Hide fields</Button>
          <Button variant="outline" size="sm"><Filter className="w-4 h-4 mr-1" />Filter</Button>
          <Button variant="outline" size="sm"><Eye className="w-4 h-4 mr-1" />Cell view</Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm"><Upload className="w-4 h-4 mr-1" />Import</Button>
          <Button variant="outline" size="sm"><Download className="w-4 h-4 mr-1" />Export</Button>
          <Button variant="outline" size="sm"><Share2 className="w-4 h-4 mr-1" />Share</Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700"><Plus className="w-4 h-4 mr-1" />New Action</Button>
        </div>
      </div>

      <div className="flex h-full">
        <div className="w-12  border-r">
          <div className="h-12 border-b"></div>
          {tasks.map((_, index) => (
            <div key={index} className="h-12 border-b flex items-center justify-center text-sm text-gray-600">
              {index + 1}
            </div>
          ))}
        </div>

        <div className="flex-1 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-64">Job Request</TableHead>
                <TableHead className="w-32">Submitted</TableHead>
                <TableHead className="w-32">Status</TableHead>
                <TableHead className="w-32">Submitter</TableHead>
                <TableHead className="w-40">URL</TableHead>
                <TableHead className="w-32">Assigned</TableHead>
                <TableHead className="w-24">Priority</TableHead>
                <TableHead className="w-32">Due Date</TableHead>
                <TableHead className="w-32">Est. Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{task.jobRequest}</TableCell>
                  <TableCell>{task.submitted}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(task.status)}>{task.status}</Badge>
                  </TableCell>
                  <TableCell>{task.submitter}</TableCell>
                  <TableCell className="text-blue-600 underline cursor-pointer">{task.url}</TableCell>
                  <TableCell>{task.assigned}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                  </TableCell>
                  <TableCell>{task.dueDate}</TableCell>
                  <TableCell>{task.estValue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="border-t bg-white">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="h-12 bg-transparent border-0 rounded-none">
            <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">All Orders</TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">Pending</TabsTrigger>
            <TabsTrigger value="reviewed" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">Reviewed</TabsTrigger>
            <TabsTrigger value="arrived" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">Arrived</TabsTrigger>
            <TabsTrigger value="add" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">+</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}