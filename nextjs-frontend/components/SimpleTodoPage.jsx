"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, CheckCircle2, Clock, AlertCircle, Target, Brain, Sparkles, 
  CalendarDays, Search, Tag, Calendar, Star, ChevronDown, ChevronUp, GripVertical } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.jsx";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command.jsx";
import { ScrollArea } from "@/components/ui/scroll-area.jsx";

const CATEGORIES = [
  "Technical", "Behavioral", "System Design", "Data Structures", 
  "Algorithms", "Projects", "Resume", "Other"
];

// Mock todos for development mode
const MOCK_TODOS = [
  {
    id: "1",
    text: "Update resume with latest projects",
    completed: false,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    dueDate: new Date(Date.now() + 172800000).toISOString(),
    priority: "high",
    category: "Resume"
  },
  {
    id: "2",
    text: "Practice system design interview questions",
    completed: false,
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    dueDate: new Date(Date.now() + 86400000).toISOString(),
    priority: "medium",
    category: "System Design"
  },
  {
    id: "3",
    text: "Complete the CareerPilot project",
    completed: true,
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    dueDate: new Date(Date.now() - 86400000).toISOString(),
    priority: "high",
    category: "Projects"
  },
  {
    id: "4",
    text: "Study binary trees and graph algorithms",
    completed: false,
    createdAt: new Date(Date.now() - 345600000).toISOString(),
    dueDate: new Date(Date.now() + 259200000).toISOString(),
    priority: "medium",
    category: "Algorithms"
  },
  {
    id: "5",
    text: "Research top companies in my field",
    completed: false,
    createdAt: new Date(Date.now() - 432000000).toISOString(),
    dueDate: null,
    priority: "low",
    category: "Other"
  }
];

export default function SimpleTodoPage() {
  const router = useRouter();
  const [todos, setTodos] = useState(MOCK_TODOS);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState("priority");
  const [sortOrder, setSortOrder] = useState("desc");
  const { toast } = useToast();

  // Filter todos based on current filter, search query and category
  const filteredTodos = todos.filter(todo => {
    // Filter by completion status
    if (filter === "completed" && !todo.completed) return false;
    if (filter === "active" && todo.completed) return false;
    
    // Filter by search query
    if (searchQuery && !todo.text.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    // Filter by category
    if (selectedCategory && todo.category !== selectedCategory) return false;
    
    return true;
  });

  // Sort todos
  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sortBy === "priority") {
      const priorityValues = { high: 3, medium: 2, low: 1 };
      return sortOrder === "desc" 
        ? priorityValues[b.priority] - priorityValues[a.priority]
        : priorityValues[a.priority] - priorityValues[b.priority];
    }
    
    if (sortBy === "dueDate") {
      if (!a.dueDate) return sortOrder === "desc" ? 1 : -1;
      if (!b.dueDate) return sortOrder === "desc" ? -1 : 1;
      return sortOrder === "desc" 
        ? new Date(b.dueDate) - new Date(a.dueDate)
        : new Date(a.dueDate) - new Date(b.dueDate);
    }
    
    return 0;
  });

  // Calculate progress
  const completedCount = todos.filter(todo => todo.completed).length;
  const progress = todos.length > 0 ? (completedCount / todos.length) * 100 : 0;

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    // Add new todo with a fake ID
    const newTodoItem = {
      id: Date.now().toString(),
      text: newTodo,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: null,
      priority: "medium",
      category: selectedCategory || "Other"
    };
    
    setTodos([newTodoItem, ...todos]);
    setNewTodo("");
    
    toast({
      title: "Todo added",
      description: "Your new task has been added successfully."
    });
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    
    toast({
      title: "Todo deleted",
      description: "Your task has been deleted successfully."
    });
  };

  const handleUpdatePriority = (id, priority) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, priority } : todo
    ));
  };

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high": return "bg-[#C62828]";
      case "medium": return "bg-[#F57C00]";
      case "low": return "bg-[#FFC107]";
      default: return "bg-[#282828]";
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#C62828] via-[#F57C00] to-[#FFC107] bg-clip-text text-transparent">Task Management</h1>
        <p className="text-[#A0A0A0]">
          Organize your interview preparation and job search tasks.
        </p>
      </div>

      {/* Progress Section */}
      <Card className="mb-6 bg-[#121212] border border-[#282828]">
        <CardContent className="pt-6">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm text-muted-foreground">
              {completedCount} of {todos.length} tasks completed
            </div>
            <div className="text-sm font-medium">
              {Math.round(progress)}%
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </CardContent>
      </Card>

      {/* Add Todo Form */}
      <Card className="mb-6 bg-[#121212] border border-[#282828]">
        <CardHeader>
          <CardTitle className="text-xl text-white">Add New Task</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddTodo} className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Input
                placeholder="What do you need to do?"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="flex-1"
              />
              <Button 
                type="submit" 
                disabled={!newTodo.trim()}
                className="bg-gradient-to-r from-[#C62828] to-[#F57C00] text-white hover:opacity-90 border-none"
              >
                <Plus className="h-4 w-4 mr-2" /> Add
              </Button>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="text-xs h-8 bg-[#1A1A1A] text-[#E0E0E0] border-[#282828] hover:bg-[#282828] hover:text-[#FFC107]">
                    <Tag className="h-3 w-3 mr-2 text-[#F57C00]" />
                    {selectedCategory || "Category"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Search categories..." />
                    <CommandEmpty>No category found.</CommandEmpty>
                    <ScrollArea className="h-64">
                      <CommandGroup>
                        {CATEGORIES.map((category) => (
                          <CommandItem
                            key={category}
                            onSelect={() => {
                              setSelectedCategory(category === selectedCategory ? null : category);
                            }}
                            className="cursor-pointer"
                          >
                            <div
                              className={`mr-2 h-3 w-3 rounded-full ${
                                selectedCategory === category ? "bg-primary" : "bg-muted"
                              }`}
                            />
                            {category}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </ScrollArea>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Todo List */}
      <Card className="bg-[#121212] border border-[#282828]">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl text-white">Your Tasks</CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                <Input
                  placeholder="Search tasks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 h-9 w-[180px] md:w-[260px]"
                />
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="all" value={filter} onValueChange={setFilter} className="w-full">
            <TabsList className="grid grid-cols-3 w-full bg-[#1A1A1A] border border-[#282828]">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#282828] data-[state=active]:text-[#FFC107]">All</TabsTrigger>
              <TabsTrigger value="active" className="data-[state=active]:bg-[#282828] data-[state=active]:text-[#FFC107]">Active</TabsTrigger>
              <TabsTrigger value="completed" className="data-[state=active]:bg-[#282828] data-[state=active]:text-[#FFC107]">Completed</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex gap-2 mt-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs"
              onClick={() => toggleSort("priority")}
            >
              Priority
              {sortBy === "priority" && (
                sortOrder === "desc" ? 
                <ChevronDown className="ml-1 h-3 w-3" /> : 
                <ChevronUp className="ml-1 h-3 w-3" />
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs"
              onClick={() => toggleSort("dueDate")}
            >
              Due Date
              {sortBy === "dueDate" && (
                sortOrder === "desc" ? 
                <ChevronDown className="ml-1 h-3 w-3" /> : 
                <ChevronUp className="ml-1 h-3 w-3" />
              )}
            </Button>
            
            {selectedCategory && (
              <Badge 
                variant="outline" 
                className="ml-auto cursor-pointer"
                onClick={() => setSelectedCategory(null)}
              >
                {selectedCategory} ×
              </Badge>
            )}
          </div>
        </CardHeader>
        
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : sortedTodos.length > 0 ? (
            <ScrollArea className="h-[480px] pr-4">
              <AnimatePresence>
                {sortedTodos.map(todo => (
                  <motion.div
                    key={todo.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="group"
                  >
                    <div className={`
                      flex items-center gap-2 p-3 rounded-lg mb-2
                      ${todo.completed ? 'bg-muted/40' : 'bg-card hover:bg-accent/10'}
                      border border-border transition-colors
                    `}>
                      {/* Checkbox */}
                      <Checkbox
                        checked={todo.completed}
                        onCheckedChange={() => handleToggleTodo(todo.id)}
                        className="data-[state=checked]:bg-green-600"
                      />
                      
                      {/* Todo Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className={`
                            flex-1 text-sm font-medium
                            ${todo.completed ? 'line-through text-muted-foreground' : ''}
                          `}>
                            {todo.text}
                          </p>
                        </div>
                        
                        {/* Todo Meta */}
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground flex-wrap">
                          {/* Priority Badge */}
                          <div className="flex items-center gap-1">
                            <div className={`h-2 w-2 rounded-full ${getPriorityColor(todo.priority)}`}></div>
                            <span className="capitalize">{todo.priority}</span>
                          </div>
                          
                          {/* Category Badge */}
                          {todo.category && (
                            <Badge variant="outline" className="text-xs font-normal">
                              {todo.category}
                            </Badge>
                          )}
                          
                          {/* Creation Time */}
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>
                              {formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}
                            </span>
                          </div>
                          
                          {/* Due Date */}
                          {todo.dueDate && (
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>
                                Due {formatDistanceToNow(new Date(todo.dueDate), { addSuffix: true })}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center gap-1">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Star className={`h-4 w-4 ${
                                todo.priority === "high" ? "fill-red-500 text-red-500" :
                                todo.priority === "medium" ? "fill-amber-500 text-amber-500" :
                                "text-muted-foreground"
                              }`} />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <div className="p-2 flex gap-1">
                              <Button 
                                variant={todo.priority === "low" ? "default" : "outline"} 
                                size="sm"
                                onClick={() => handleUpdatePriority(todo.id, "low")}
                              >
                                Low
                              </Button>
                              <Button 
                                variant={todo.priority === "medium" ? "default" : "outline"} 
                                size="sm"
                                onClick={() => handleUpdatePriority(todo.id, "medium")}
                              >
                                Medium
                              </Button>
                              <Button 
                                variant={todo.priority === "high" ? "default" : "outline"} 
                                size="sm"
                                onClick={() => handleUpdatePriority(todo.id, "high")}
                              >
                                High
                              </Button>
                            </div>
                          </PopoverContent>
                        </Popover>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleDeleteTodo(todo.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </ScrollArea>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="h-12 w-12 text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-medium">No tasks found</h3>
              <p className="text-muted-foreground text-sm mt-1">
                {filter !== "all" 
                  ? `No ${filter} tasks found. Try changing your filter.` 
                  : "Start by adding a new task above."}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
