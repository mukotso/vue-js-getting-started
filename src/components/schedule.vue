<template>
    <div class="container">
        <h3>WEEKLU SCHEDULE</h3>
        <table v-show="isScheduled" class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Day</th>
                    <th>Task</th>
                    <th>Number Of Task</th>
                    <th>Status</th>
                    <th>Started at </th>
                    <th>Completed at </th>
                    <th>Action </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(schedule,index) in schedules" :key="index">
                    <td>{{schedule.id}} </td>
                    <td>{{schedule.day}} </td>
                    <td>{{schedule.task}}</td>
                    <td>{{schedule.taskNumber}}</td>
                    <td>{{schedule.status}}</td>
                    <td>{{schedule.started_at}}</td>
                    <td>{{schedule.completed_at}}</td>
                    <td><button v-bind:class="{ active: completed }">ADD TASKS</button></td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            schedules: [
                { id:1,day: '17th January 2020', task: 'Component Registration', taskNumber: '4', status: 'completed',started_at:"12:04AM",completed_at:"4:00PM" },
                { id:2,day: '18th January 2020', task: 'Transition and animation', taskNumber: '4', status: 'started',started_at:"12:04AM",completed_at:"3:00PM" },
                { id:3,day: '19th January 2020', task: 'Reusability and composition', taskNumber: '4', status: 'pending',started_at:"12:04AM",completed_at:"4:00PM" },
                { id:4,day: '20th January 2020', task: 'Tooling',taskNumber: '4', status: 'pending',started_at:"11:00AM",completed_at:"8:00PM" },
                { id:5,day: '21st January 2020', task: 'Migrating', taskNumber: '4', status: 'pending',started_at:"10:44AM",completed_at:"9:00PM" },
                { id:6,day: '22nd January 2020', task: 'Migrating', taskNumber: '4', status: 'pending',started_at:"12:16AM",completed_at:"1:00PM" }
        
            ],
            completed:true,
            isScheduled:true
        };
    }
};
</script>