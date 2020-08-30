const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
    'task-5': { id: 'task-5', content: 'Clean my room' },
    'task-6': { id: 'task-6', content: 'Call Mom' },
    'task-7': { id: 'task-7', content: 'Take my dog to the vet' },
    'task-8': { id: 'task-8', content: 'Water my plants' },
    'task-9': { id: 'task-9', content: 'Drink more water today' },
    'task-10': { id: 'task-10', content: 'Do some laundry' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-5', 'task-6', 'task-7', 'task-8']
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-9', 'task-10']
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
}

export default initialData;