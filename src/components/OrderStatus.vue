<template>
  <div class="container">
    <h4>Order Status</h4>
    <div class="toolbar">
      <button @click="addOrder">Add</button>
      <input v-model="search" placeholder="Search" />
    </div>
    <table>
      <thead>
        <tr>
          <th>Invoice</th>
          <th>Customers</th>
          <th>From</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in filteredOrders" :key="order.invoice">
          <td>{{ order.invoice }}</td>
          <td>{{ order.customers }}</td>
          <td>{{ order.from }}</td>
          <td>{{ order.price }}</td>
          <td>
            <span :class="getStatusClass(order.status)">{{ order.status }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="page === 1">Prev</button>
      <button @click="nextPage" :disabled="page === pageCount">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      page: 1,
      perPage: 5,
      orders: [
        { invoice: 12386, customers: 'Charly Dues', from: 'Brazil', price: '$299', status: 'Process' },
        { invoice: 12386, customers: 'Marko', from: 'Italy', price: '$2642', status: 'Open' },
        { invoice: 12386, customers: 'Denyiel Onak', from: 'Russia', price: '$981', status: 'OnHold' },
        { invoice: 12386, customers: 'Belgiri Bastana', from: 'Korea', price: '$369', status: 'Process' },
        { invoice: 12386, customers: 'Sarti Onuska', from: 'Japan', price: '$1240', status: 'Open' },
        // Add more entries to simulate a larger dataset
        { invoice: 12387, customers: 'John Doe', from: 'USA', price: '$500', status: 'Open' },
        { invoice: 12388, customers: 'Jane Smith', from: 'UK', price: '$700', status: 'OnHold' },
        { invoice: 12389, customers: 'Carlos Mendez', from: 'Spain', price: '$400', status: 'Process' },
        { invoice: 12390, customers: 'Liu Wong', from: 'China', price: '$650', status: 'Open' },
        { invoice: 12391, customers: 'Akira Tanaka', from: 'Japan', price: '$300', status: 'OnHold' }
      ],
    };
  },
  computed: {
    filteredOrders() {
      const filtered = this.orders.filter(order =>
        Object.values(order).some(value =>
          String(value).toLowerCase().includes(this.search.toLowerCase())
        )
      );
      return filtered.slice((this.page - 1) * this.perPage, this.page * this.perPage);
    },
    pageCount() {
      return Math.ceil(this.orders.length / this.perPage);
    },
  },
  methods: {
    addOrder() {
      console.log('Add Order');
    },
    getStatusClass(status) {
      return {
        'status-process': status === 'Process',
        'status-open': status === 'Open',
        'status-onhold': status === 'OnHold',
      };
    },
    prevPage() {
      if (this.page > 1) this.page--;
    },
    nextPage() {
      if (this.page < this.pageCount) this.page++;
    },
  },
};
</script>

<style>
.container {
 
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  font-family: Arial, sans-serif;
}
h4 {
  text-align: left;
}
.toolbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
}
th,td {
  padding: 6px 35px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
tbody tr {
  border-bottom: 1px solid #ddd;
}
.status-process {
  color: white;
  background-color: red;
  padding: 4px;
  border-radius: 3px;
}
.status-open {
  color: white;
  background-color: green;
  padding: 4px;
  border-radius: 3px;
}
.status-onhold {
  color: white;
  background-color: blue;
  padding: 4px;
  border-radius: 3px;
}
.pagination {
  display: flex;
  justify-content: center;
}
.pagination button {
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
.pagination button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
